/*
 * @author Jared Schwartz
 * @since 2015-01-26
 */

$(document).ready(function(){
	$(window).load(function(){
		
		var sc1 = '[name="'; // sc = sudo call; easy to insert when making a lot of jQuery calls for sudo-01, etc
		var sc2 =	'"]';
		
		/* Names of all the squares, arranged in collections by row, column, and grid.
		 * This makes it easy to check the board or insert new values.
		 */
		var row0 = ["sudo-01","sudo-02","sudo-03","sudo-04","sudo-05","sudo-06","sudo-07","sudo-08","sudo-09"];
		var row1 = ["sudo-11","sudo-12","sudo-13","sudo-14","sudo-15","sudo-16","sudo-17","sudo-18","sudo-19"];
		var row2 = ["sudo-21","sudo-22","sudo-23","sudo-24","sudo-25","sudo-26","sudo-27","sudo-28","sudo-29"];
		var row3 = ["sudo-31","sudo-32","sudo-33","sudo-34","sudo-35","sudo-36","sudo-37","sudo-38","sudo-39"];
		var row4 = ["sudo-41","sudo-42","sudo-43","sudo-44","sudo-45","sudo-46","sudo-47","sudo-48","sudo-49"];
		var row5 = ["sudo-51","sudo-52","sudo-53","sudo-54","sudo-55","sudo-56","sudo-57","sudo-58","sudo-59"];
		var row6 = ["sudo-61","sudo-62","sudo-63","sudo-64","sudo-65","sudo-66","sudo-67","sudo-68","sudo-69"];
		var row7 = ["sudo-71","sudo-72","sudo-73","sudo-74","sudo-75","sudo-76","sudo-77","sudo-78","sudo-79"];
		var row8 = ["sudo-81","sudo-82","sudo-83","sudo-84","sudo-85","sudo-86","sudo-87","sudo-88","sudo-89"];
		var rowCollect = [row0,row1,row2,row3,row4,row5,row6,row7,row8];
		
		var col0 = ["sudo-01","sudo-11","sudo21","sudo-31","sudo-41","sudo-51","sudo-61","sudo-71","sudo-81"];
		var col1 = ["sudo-02","sudo-12","sudo22","sudo-32","sudo-42","sudo-52","sudo-62","sudo-72","sudo-82"];
		var col2 = ["sudo-03","sudo-13","sudo23","sudo-33","sudo-43","sudo-53","sudo-63","sudo-73","sudo-83"];
		var col3 = ["sudo-04","sudo-14","sudo24","sudo-34","sudo-44","sudo-54","sudo-64","sudo-74","sudo-84"];
		var col4 = ["sudo-05","sudo-15","sudo25","sudo-35","sudo-45","sudo-55","sudo-65","sudo-75","sudo-85"];
		var col5 = ["sudo-06","sudo-16","sudo26","sudo-36","sudo-46","sudo-56","sudo-66","sudo-76","sudo-86"];
		var col6 = ["sudo-07","sudo-17","sudo27","sudo-37","sudo-47","sudo-57","sudo-67","sudo-77","sudo-87"];
		var col7 = ["sudo-08","sudo-18","sudo28","sudo-38","sudo-48","sudo-58","sudo-68","sudo-78","sudo-88"];
		var col8 = ["sudo-09","sudo-19","sudo29","sudo-39","sudo-49","sudo-59","sudo-69","sudo-79","sudo-89"];
		var colCollect = [col0,col1,col2,col3,col4,col5,col6,col7,col8];
		
		var grid0 = ["sudo-01","sudo-02","sudo-03","sudo-11","sudo-12","sudo-13","sudo-21","sudo-22","sudo-23"];
		var grid1 = ["sudo-04","sudo-05","sudo-06","sudo-14","sudo-15","sudo-16","sudo-24","sudo-25","sudo-26"];
		var grid2 = ["sudo-07","sudo-08","sudo-09","sudo-17","sudo-18","sudo-19","sudo-27","sudo-28","sudo-29"];
		var grid3 = ["sudo-31","sudo-32","sudo-33","sudo-41","sudo-42","sudo-43","sudo-51","sudo-52","sudo-53"];
		var grid4 = ["sudo-34","sudo-35","sudo-36","sudo-44","sudo-45","sudo-46","sudo-54","sudo-55","sudo-56"];
		var grid5 = ["sudo-37","sudo-38","sudo-39","sudo-47","sudo-48","sudo-49","sudo-57","sudo-58","sudo-59"];
		var grid6 = ["sudo-61","sudo-62","sudo-63","sudo-71","sudo-72","sudo-73","sudo-81","sudo-82","sudo-83"];
		var grid7 = ["sudo-64","sudo-65","sudo-66","sudo-74","sudo-75","sudo-76","sudo-84","sudo-85","sudo-86"];
		var grid8 = ["sudo-67","sudo-68","sudo-69","sudo-77","sudo-78","sudo-79","sudo-87","sudo-88","sudo-89"];
		var gridCollect = [grid0,grid1,grid2,grid3,grid4,grid5,grid6,grid7,grid8];
		
		// Timer for the game; initialized when Start button is clicked
		var timer;
		
		/* Shortcut to send messages to the textarea on the right */
		var setAlert = function(message){
			$("#alert").text(message);
		};
		
		/* Function that takes an already generated board and sets those values in the table */
		var setNewBoard = function(grid){
			for(var x=0; x<9; x++){
				for(var y=0; y<9; y++){
					var next = grid[x][y];
					if(next === ' '){
						$(sc1 + rowCollect[x][y] + sc2).removeClass();
						$(sc1 + rowCollect[x][y] + sc2).val("");
						$(sc1 + rowCollect[x][y] + sc2).addClass("guess");
					} else {
						$(sc1 + rowCollect[x][y] + sc2).removeClass();
						$(sc1 + rowCollect[x][y] + sc2).val(next);
						$(sc1 + rowCollect[x][y] + sc2).addClass("hint");
					}
				}
			}
			return;
		};
		
		/* Generates a new board and sets it on refresh.
		 * This is the first board a user sees.
		 */
		var grid = newBoard();
		grid = deleteSquares(grid);
		setNewBoard(grid);
		
		$("#start").click(function(){
			// set timer to count up every second when start clicked
			timer = 
			setInterval(function () {
				var time = $("#timer").text();
				var min = parseInt(time.split(":")[0]);
				var sec = parseInt(time.split(":")[1]) + 1;
				if(sec >= 60){
					sec = 00;
					min += 1;
				}
				if(sec < 10){
					var secStr = "0" + sec.toString();
					var minStr = min.toString();
				} else {
					var secStr = sec.toString();
					var minStr = min.toString();
				}
				$("#timer").text(minStr + ":" + secStr);
			}, 1000);
			
			// enable pause, submit, and check buttons
			$("#pause, #submit, #validate").prop("disabled", false);
			
			// allowed guessable squares to be edited
			$(".guess").each(function(){
				$(this).prop('readonly', false);
			});
		});
		
		/* Stops timer and disabled ability to edit guessable squares; opposite of Start */
		$("#pause").click(function() {
			clearInterval(timer);
			$(".guess").each(function(){
				$(this).prop('readonly', true);
			});
		});
		
		/* Function to make sure the board follows Sudoku rules using the preset collection of indices.
		 * If it fails, the message is sent within this method; on success the message is sent outside.
		 * Contains a boolean for it is submitted or not; if submitted it also failed on empty squares.
		 */
		var validateBoard = function(subBool){
			for(var j=0; j<9; j++){
				var curRow = rowCollect[j];
				var curCol = colCollect[j];
				var curGrid = gridCollect[j];
				var valRows = [0,0,0,0,0,0,0,0,0,0];
				var valCols = [0,0,0,0,0,0,0,0,0,0];
				var valGrids = [0,0,0,0,0,0,0,0,0,0];
				for(var i=0; i<9; i++){
					var rowInd = " ABCDEFGHI".indexOf($(sc1 + curRow[i] + sc2).val());
					if(subBool && rowInd === 0){
						setAlert("Board not yet completed.");
						return false; // checks for empty squares if board is being submitted, not validated
					}
					if(rowInd > 0){  // empty space defaults to index 0 for some reason, even without leading space in string
						if(valRows[rowInd] !== 0){
							setAlert("Check failed on Row " + (j+1).toString());
							return false;
						} else {
							valRows[rowInd] = 1;
						}
					}

					var colInd = " ABCDEFGHI".indexOf($(sc1 + curCol[i] + sc2).val());
					if(subBool && colInd === 0){
						setAlert("Board not yet completed.");
						return false;
					}
					if(colInd > 0){
						if(valCols[colInd] !== 0){
							setAlert("Check failed on Column " + (j+1).toString());
							return false;
						} else {
							valCols[colInd] = 1;
						}
					}

					var gridInd = " ABCDEFGHI".indexOf($(sc1 + curGrid[i] + sc2).val());
					if(subBool && gridInd === 0){
						setAlert("Board not yet completed.");
						return false;
					}
					if(gridInd > 0){
						if(valGrids[gridInd] !== 0){
							setAlert("Check failed on Grid " + (j+1).toString());
							return false;
						} else {
							valGrids[gridInd] = 1;
						}
					}
				}
			}
			return true;
		};
		
		/* Used for every time a single square is edited.
		 * Makes sure the new input is a valid letter and sets it to uppercase.
		 * Clears textarea of alerts.
		 */
		var verifySingleInput = function(name){
			var call = '[name="'+name+'"]';
			var square = $(call).val();
			if(square !== undefined){
				if(square.length > 0){
					square = square.toUpperCase();
				}
				if(square.length > 1 || " ABCDEFGHI".indexOf(square) === -1){
					setAlert("Boxes must be filled with a valid drive letter: ABCDEFGHI");
					$(call).val("");
					return;
				}
				setAlert("");
				$(call).val(square);
			}
			return;
		};
		
		$("input").blur(function(){
			verifySingleInput(this.name);
		});
		
		/* Validate board as it currently appears, without knowing the solution.
		 * Failure alerts are set within validateBaord() but successful check is set here.
		 */
		$("#validate").click(function(){
			if(validateBoard(false)){
				setAlert("Check passed okay.");
			}
		});
		
		/* Checks board for correctness and completion.
		 * If completed correctly, sends a congratulatory message with time taken,
		 * disabled all buttons but New Game, and stops the timer.
		 */
		$("#submit").click(function(){
			if(validateBoard(true)){
				var t = $("#timer").text();
				var m = parseInt(t.split(":")[0]);
				var s = parseInt(t.split(":")[1]);
				var mStr = "";
				var sStr = s.toString() + " seconds!";
				if(s === 1){
					sStr = s.toString() + " second!";
				}
				if(m > 0){
					if(m === 1){
						mStr = m.toString() + " minute and ";
					} else {
						mStr = m.toString() + " minutes and ";
					}
				}
		
				setAlert("Congratulations! You solved the board in " + mStr + sStr);
				$(":button:not(#new)").prop("disabled", true);
				clearInterval(timer);
			}
		});
		
		/* Used to set a new board and start a new game.
		 * Stops and resets timer, clears alerts, disables all buttons but start,
		 * then generates a new board, removes half the answers, and sets it.
		 * Makes all squares uneditable.
		 */
		$("#new").click(function(){
			clearInterval(timer);
			$("#timer").text("0:00");
			setAlert("");
			grid = newBoard();
			grid = deleteSquares(grid);
			setNewBoard(grid);
			$("#start").prop("disabled", false);
			$(":button:not(#new, #start)").prop("disabled", true);
			$("td>input").prop("readonly", true);
		});
	});
});
