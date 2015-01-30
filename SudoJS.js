/*
 * @author Jared Schwartz
 * @since 2014-10-01
 */

$(document).ready(function(){
	$(window).load(function(){
		
		// Pre-defined variables
		var filterShown = []; // list of checked filters, used for undoing effects
		var regions = $("#SanMarco, #Murano, #Castello"); // for hiding regions when showing filters
		var buildings = $(".SanMarco, .Murano, .Castello");
		var height = 580, width = 960; // viewbox dimensions
		var curActiveID = ""; // current active building
		
		// Create defs and define clip-paths	
		$("#Map").before("<defs> </defs>");
		
		/*
		 * Generic function to create clip-paths of a path.
		 * Input: origID of a path and stroke color
		 * Purpose: Creates a clip-path, with id "origIDClip" using the bounding box of the path
		 * and adds it to the defs element for later use
		 */
		var makeClipPath = function(elID, stroke){
			var box = $(elID)[0].getBBox();
			var clip = "<clipPath id=\"" + elID.replace("#","") + "Clip\"> <rect x="
			+ box.x + " y="+box.y + " width="+box.width+" height="+box.height+" stroke=\""+stroke+"\"/> </clipPath>";
			$("defs").append(clip);
			return;
		};
		
		// Make clip-path for each district for zooming
		makeClipPath("#Duchal", "green");
		makeClipPath("#Murano", "green");
		makeClipPath("#ViewBox", "green");

	
		/*
		 *  Generic function to calculate zoom params for any path using bounding box
		 *  @param id of a region to zoom in on
		 *  @return array with scalefactor and dimensions for zooming formula
		 */
		var zoomVariables = function(elID){
			var box = $(elID)[0].getBBox();
			// + 30, + 50 is to leave space around the path in the window
			var scaleFactor = Math.min(height / (box.height+30), width / (box.width+50));
			var zoomX = box.x + (box.width/2),
				zoomY = box.y + (box.height/2);
			return [scaleFactor, -zoomX, -zoomY, box.width, box.height];
		};
		
		
		/*
		 * Function to zoom in if the element is not zoomed, and zoom out if already zoomed
		 * Adds transform attribute to wrapper element that has the zoom code
		 * @param id of element
		 */
		var toggleZoom = function(elID){
			if($("#wrapper").attr("transform")){
				// already zoomed
				$("#wrapper").removeAttr("transform");
				$(".District").show();
			} else {
				var settings = zoomVariables(elID); // scaleFactor, zoomX, zoomY
				$("#wrapper").attr("transform",
						"translate(" + (-settings[1]/*-settings[3]*/) + "," + (-settings[2]/*+settings[4]*/) + ")" +
						"scale(" + settings[0] + ")" +
						"translate(" + settings[1] + "," + settings[2] + ")");
				
				// hide all other districts because switching between them while zoomed causes problems
				$(".District:not("+elID+")").hide();
			}
			return;
		};
		
//		$("wrapper").css("clip-path", "url(#ViewClip)");
		// adds/removes clip-path 
		
		/*
		 * Adds or removes a clip-path to the css of wrapper element
		 * @param name of clip-path, typically "#RegionClip"
		 */
		var toggleClip = function(clipName){
			var $wrap = $("#wrapper");
			var wClip = $wrap.css("clip-path");
			if(wClip != "url("+clipName+")" && clipName != ""){
				$wrap.css("clip-path", "url("+clipName+")");
			} else {
				$wrap.css("clip-path", "");
			};
			return;
		};
		
		
		// onclick for Show/Hide Filters button; toggles the filter options
		$("#btn-filter").click(function(){
			if($(this).text() == "Show Filters"){
				// show all filters
				$(this).text("Hide Filters");
				$("#Filters").show();
			} else {
				// hide filter options
				$(this).text("Show Filters");
				$("#Filters").hide();
			}
		});
		
		/*
		 * Attached to submit button for filters
		 * Removes all current filters, then uses list of checked filters to
		 * add all that apply and highlight them on the map
		 * hides regions so that they cannot be zoomed
		 */
		var onSubmit = function(){
			removeActive(); // make sure that if already zoomed, no building still shows as active
			for(var i=0; i<filterShown.length; i++){
				// remove highlighted buildings from previous filters, if any
				filterShown[i].classList.remove("highlight");
			}
			filterShown = []; // reset list of filters
			var selected = [];
			var districts = [];
			var buildings = [];
			$('#Filters input:checked').each(function() {
			    selected.push($(this).attr('value')); // collect values of checked filters
			    if($(this).attr('name') == "district"){
			    	districts.push($(this).attr('value'));
			    }
			    if($(this).attr('name') == "building"){
			    	buildings.push($(this).attr('value'));
			    }
			});
			if(selected.length == 0){
				return; // if no filters selected, return to end the function
			}
			$("#wrapper").removeAttr("transform"); // zoom out to full map
			var showList = $([]); // initialize empty jQuery object so that $.merge works correctly
			if(buildings.length > 0){
				// build a list of all building elements selected by the building filters
				$.each(buildings, function(index, value){
					var list = $("."+value);
					$.merge(showList, list); // adds all newly selected elements into showList
				});
				if(districts.length > 0){
					// narrow building list down by only including buildings in checked regions
					var districtSelector = "";
					for(var i=0; i<districts.length; i++){
						if(i == districts.length-1){
							// dont add ", " to continue the string if it is the last district
							districtSelector += "." + districts[i];
							break;
						}
						// create list ".one, .two, .three" to make string of selectors to filter by
						districtSelector += "." + districts[i] + ", ";
					}
					// filter list to only include checked districts
					showList = showList.filter(districtSelector);
				}
			} else{
				// if building list is empty, just add every building in checked regions
				$.each(districts, function(index, value){
					var list = $("."+value);
					showList.push.apply(showList, list);
				});
			}
			
			// show selected buildings, add highlight class to make them appear,
			// and keep array of highlighted elements so they are easy to remove
			showList.show();
			for(var i=0; i<showList.length; i++){	
				showList[i].classList.add("highlight");
				filterShown.push(showList[i]);
			}
			// hide regions so only the buildings show
			for(var i=0; i<regions.length; i++){
				$(regions[i]).hide();
			}
		};
		
		// onclick for submit button to run onSubmit()
		$("#Submit").click(function(){
			onSubmit();
		});
		
		/*
		 * Attached to Clear Map button in filters
		 * Removes all highlighted buildings and shows regions for zooming
		 */
		$("#btn-clear-map").click(function(){
			for(var i=0; i<filterShown.length; i++){
				// clear highlighted buildings
				filterShown[i].classList.remove("highlight");
			}
			buildings.hide();

			// show regions again so map is reset to original settings
			regions.show();
			
			removeActive();
			$(".info").hide();
			filterShown = []; // reset used filters list
		});
		

		// Section of onclick methods for each region
		// On zoom in: zooms, changed fill color, shows buildings
		// On zoom out: reverts fill color, hides building info if shown, hides buildings
		$("#SanMarco").click( function(){
//			toggleClip("#DuchalClip");
			toggleZoom("#SanMarco"); // zooms if not zoomed and vice versa
			if($("#wrapper").attr("transform")){
				// if togglezoom just zoomed (added transform attr), show buildings in the region and grey the region
				$("#SanMarco").css("fill","#000000");
				$(".SanMarco").show();
			} else {
				// if just zoomed out, revert region color and hide buildings & info
				$("#SanMarco").css("fill","#ace63c");
				$(".info").hide();
				$(".SanMarco").hide();
				removeActive();
			}
//			$(".SanMarco").toggle();
			} );
		$("#Castello").click( function(){
//			toggleClip("#DuchalClip");
			toggleZoom("#Castello");
			if($("#wrapper").attr("transform")){
				$("#Castello").css("fill","#000000");
				$(".Castello").show();
			} else {
				$("#Castello").css("fill","#ace63c");
				$(".info").hide();
				$(".Castello").hide();
				removeActive();
			}
			} );
		$("#Murano").click( function(){
			// special case because the building and region are the same shape
			// treat region as the building on zoom, and only use building for filter/highlight
			toggleZoom("#Murano");
			if($("#wrapper").attr("transform")){
				$("#Murano").css("fill","#000000");
				$("#MuranoInfo").show();
				toggleActiveClass("#Murano");
			} else {
				$("#Murano").css("fill","#ace63c");
				$(".info").hide();
				$(".Murano").hide();
				removeActive();
			}
			$("#wrapper").addClass("clipped");
			} );
		
		// switch the active building from current to the one in elID
		var toggleActiveClass = function(elID){
			if(curActiveID.length > 0){
				$(curActiveID)[0].classList.remove("active");
			}
			$(elID)[0].classList.add("active");
			curActiveID = elID;
		};
		
		// Remove active class from whatever building is active; used when filters are shown
		var removeActive = function(){
			if(curActiveID.length > 0){
				$(curActiveID)[0].classList.remove("active");
			}
			curActiveID = "";
		};
		
		// Section of onclick methods for buildings
		// shows building as active and display info
		// every line expanded looks like the Duchal function below
		$("#Duchal").click(function(){
			$(".info").hide();
			$("#DuchalInfo").toggle();
			toggleActiveClass("#Duchal");
		});
		$("#Build1").click(function(){$(".info").hide();$("#Build1Info").toggle();toggleActiveClass("#Build1");});
		$("#Build2").click(function(){$(".info").hide();$("#Build2Info").toggle();toggleActiveClass("#Build2");});
		$("#Build3").click(function(){$(".info").hide();$("#Build3Info").toggle();toggleActiveClass("#Build3");});
		$("#Build4").click(function(){$(".info").hide();$("#Build4Info").toggle();toggleActiveClass("#Build4");});
		$("#MuranoBuild").click(function(){
			$(".info").hide();$("#MuranoInfo").toggle();toggleActiveClass("#MuranoBuild");
			// special case because the building and region are the same shape
			if($("#wrapper").attr("transform")){
				toggleZoom(".Murano");
			}});
	});
});
