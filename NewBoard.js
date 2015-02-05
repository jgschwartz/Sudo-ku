/*
 * @author Jared Schwartz
 * @since 2015-02-05
 */

/* Index of squares arranged by row, column, and grid.
 * Important for validating the board in all three ways simultaneously. */
var colCollect = [[[0,0],[1,0],[2,0],[3,0],[4,0],[5,0],[6,0],[7,0],[8,0]],
                  [[0,1],[1,1],[2,1],[3,1],[4,1],[5,1],[6,1],[7,1],[8,1]],
                  [[0,2],[1,2],[2,2],[3,2],[4,2],[5,2],[6,2],[7,2],[8,2]],
                  [[0,3],[1,3],[2,3],[3,3],[4,3],[5,3],[6,3],[7,3],[8,3]],
                  [[0,4],[1,4],[2,4],[3,4],[4,4],[5,4],[6,4],[7,4],[8,4]],
                  [[0,5],[1,5],[2,5],[3,5],[4,5],[5,5],[6,5],[7,5],[8,5]],
                  [[0,6],[1,6],[2,6],[3,6],[4,6],[5,6],[6,6],[7,6],[8,6]],
                  [[0,7],[1,7],[2,7],[3,7],[4,7],[5,7],[6,7],[7,7],[8,7]],
                  [[0,8],[1,8],[2,8],[3,8],[4,8],[5,8],[6,8],[7,8],[8,8]]];

var gridCollect = [[[0,0],[0,1],[0,2],[1,0],[1,1],[1,2],[2,0],[2,1],[2,2]],
                   [[0,3],[0,4],[0,5],[1,3],[1,4],[1,5],[2,3],[2,4],[2,5]],
                   [[0,6],[0,7],[0,8],[1,6],[1,7],[1,8],[2,6],[2,7],[2,8]],
                   [[3,0],[3,1],[3,2],[4,0],[4,1],[4,2],[5,0],[5,1],[5,2]],
                   [[3,3],[3,4],[3,5],[4,3],[4,4],[4,5],[5,3],[5,4],[5,5]],
                   [[3,6],[3,7],[3,8],[4,6],[4,7],[4,8],[5,6],[5,7],[5,8]],
                   [[6,0],[6,1],[6,2],[7,0],[7,1],[7,2],[8,0],[8,1],[8,2]],
                   [[6,3],[6,4],[6,5],[7,3],[7,4],[7,5],[8,3],[8,4],[8,5]],
                   [[6,6],[6,7],[6,8],[7,6],[7,7],[7,8],[8,6],[8,7],[8,8]]];

var rowCollect = [[[0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],[0,7],[0,8]],
                  [[1,0],[1,1],[1,2],[1,3],[1,4],[1,5],[1,6],[1,7],[1,8]],
                  [[2,0],[2,1],[2,2],[2,3],[2,4],[2,5],[2,6],[2,7],[2,8]],
                  [[3,0],[3,1],[3,2],[3,3],[3,4],[3,5],[3,6],[3,7],[3,8]],
                  [[4,0],[4,1],[4,2],[4,3],[4,4],[4,5],[4,6],[4,7],[4,8]],
                  [[5,0],[5,1],[5,2],[5,3],[5,4],[5,5],[5,6],[5,7],[5,8]],
                  [[6,0],[6,1],[6,2],[6,3],[6,4],[6,5],[6,6],[6,7],[6,8]],
                  [[7,0],[7,1],[7,2],[7,3],[7,4],[7,5],[7,6],[7,7],[7,8]],
                  [[8,0],[8,1],[8,2],[8,3],[8,4],[8,5],[8,6],[8,7],[8,8]]];

/* Function to print the grid, mostly for debugging. */
var printGrid = function(grid){
	var printString = "";
	for(var i=0; i<9; i++){
		if(i === 3 || i === 6){
			printString += "-----------\n";
		}
		printString += grid[i][0] + " " + grid[i][1] + " " + grid[i][2] + " | " + grid[i][3] + " " +
		grid[i][4] + " " + grid[i][5] + " | " + grid[i][6] + " " + grid[i][7] + " " + grid[i][8] + "\n";
	}
	return printString;
};

/* Function to remove some of the squares' values after generation so that it can be solved */
var deleteSquares = function(grid){
	for(var i=0; i<41; i++){
		var x = Math.floor(Math.random() * 9);
		var y = Math.floor(Math.random() * 9);
		if(grid[x][y] != ' '){
			grid[x][y] = ' ';
		} else {
			i--;
		}
	}
	return grid;
}

/* Function to validate a board while it is being creating to make sure it doesn't break Sudoku rules.
 * It iterates 9 times, and on each iteration checks a row, column, and grid for repeats based using
 * the collections of the indices already held in row-, col-, and gridCollect.*/
var checkGrid = function(grid){
	for(var i=0; i<grid.length; i++){
		var rowCheck = new Array(' ');
		var colCheck = new Array(' ');
		var gridCheck = new Array(' ');
		var curRow = rowCollect[i];
		var curCol = colCollect[i];
		var curGrid = gridCollect[i];
		for(var j=0; j<grid[0].length; j++){

			var curX = curRow[j][0];
			var curY = curRow[j][1];
			var next = grid[curX][curY];
			if(next !== ' '){
				if(rowCheck.indexOf(next) > -1){
					return false;
				} else {
					rowCheck.push(next);
				}
			}

			curX = curCol[j][0];
			curY = curCol[j][1];
			next = grid[curX][curY];
			if(next !== ' '){
				if(colCheck.indexOf(next) > -1){
					return false;
				} else {
					colCheck.push(next);
				}
			}

			curX = curGrid[j][0];
			curY = curGrid[j][1];
			next = grid[curX][curY];
			if(next !== ' '){
				if(gridCheck.indexOf(next) > -1){
					return false;
				} else {
					gridCheck.push(next);
				}
			}
		}
	}
	return true;
};

/* Function to generate a new board.
 * First it initializes an empty grid (grid) and a grid full of possible letters
 * for each square (avail). As possibilities are tried and failed, that possibility
 * at that square is remove from avail. If it is empty, the function backtracks to the
 * previous square and tries another possibility.
 * 
 */
var newBoard = function(){
	// empty grid that will hold the new board
	var grid = new Array();
	for(var i=0; i<9; i++){
		grid[i] = new Array(' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ');
	}

	// grid that, for the current grid, holds all untried letters for all spaces
	var avail = new Array();
	for(var i=0; i<9; i++){
		avail[i] = new Array();
		for(var j=0; j<9; j++){
			avail[i][j] = ['A','B','C','D','E','F','G','H','I'];
		}
	}

	/* Function to generate a random index for the next possibility,
	 * where "size" is the size of the array in avail at that square,
	 * aka the untried letters for that grid in that space.
	 * If no possibilities are left, return -1.
	 */
	var genNext = function(x, y) {
		var size = avail[x][y].length;
		if(size > 0){
			return Math.floor(Math.random() * (size));
		} else {
			return -1;
		}
	};

	/* Backtracking algorithm to generate a new grid.
	 * 
	 */
	var makeAGrid = function(x, y){
		if(x === 9){
			// new board complete
			return;
		}
		var hasNext = genNext(x,y);
		var next = ' ';
		if(hasNext > -1){
			next = avail[x][y][hasNext];
		}
		if(grid[x][y] === ' '){
			grid[x][y] = next;
			// try next letter and remove the possibility from avail
			avail[x][y].splice(hasNext, 1);
		} else {
			if(hasNext === -1){
				// all combinations tried at this space
				grid[x][y] = ' ';
				avail[x][y] = new Array('A','B','C','D','E','F','G','H','I');
				// reset possibilities, because the board will be different on return
				if(y === 0){
					x -= 1;
					y = 7;
				} else {
					y -= 2;
				}
				// backtrack to previous square and change it
				return makeAGrid(x, y+1);
			} else {
				// if possibilities exist, set the square to the new guess
				// and remove it as being used
				grid[x][y] = next;
				avail[x][y].splice(hasNext, 1);
			}
		}

		if(checkGrid(grid)){
			// if this new letter fits with the rest of the grid, move to the next square
			if(y === 8){
				x += 1;
				y = -1;
			}
			return makeAGrid(x,y+1);
		} else {
			// if it does not work, try again
			if(hasNext > -1){
				// if more possibilities exist, try again in the same place
				y -= 1;
			} else {
				// if no more exist, reset this square and backtrack to previous
				grid[x][y] = ' ';
				avail[x][y] = new Array('A','B','C','D','E','F','G','H','I');
				if(x === 0){
					x -= 1;
					y = 7;
				} else {
					y -= 2;
				}
			}
			return makeAGrid(x, y+1);
		}
		return;
	};


	// Create grid by starting the backtrack at the first square, and return
	makeAGrid(0,0);
	return grid;
};
