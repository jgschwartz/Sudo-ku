import java.util.ArrayList;
import java.util.Arrays;
import java.util.Random;


public class SudoMain {
	static int calls = 0;
	static int[][][] colCollect = new int[9][9][2];
	static int[][][] gridCollect = new int[9][9][2];
	static int[][][] rowCollect = new int[9][9][2];
	static ArrayList<Character>[][] avail = (ArrayList<Character>[][])new ArrayList[9][9];
	static char[][] grid = new char[9][9];
	static Random gen = new Random();
	static final int HARD = 51;
	static final int EASY = 41; 
	
	public static boolean checkGrid(char[][] grid){
		for(int i=0; i<grid.length; i++){
			ArrayList<Character> rowCheck = new ArrayList<Character>();
			ArrayList<Character> colCheck = new ArrayList<Character>(Arrays.asList(' '));
			ArrayList<Character> gridCheck = new ArrayList<Character>(Arrays.asList(' '));
			int[][] curRow = rowCollect[i];
			int[][] curCol = colCollect[i];
			int[][] curGrid = gridCollect[i];
			for(int j=0; j<grid[0].length; j++){
				int curX = curRow[j][0];
				int curY = curRow[j][1];
				char next = grid[curX][curY];
				if(next != ' '){
					if(rowCheck.contains(next)){
						return false;
					} else {
						rowCheck.add(next);
					}
				}
				
				curX = curCol[j][0];
				curY = curCol[j][1];
				next = grid[curX][curY];
				if(next != ' '){
					if(colCheck.contains(next)){
						return false;
					} else {
						colCheck.add(next);
					}
				}
				
				curX = curGrid[j][0];
				curY = curGrid[j][1];
				next = grid[curX][curY];
				if(next != ' '){
					if(gridCheck.contains(next)){
						return false;
					} else {
						gridCheck.add(next);
					}
				}
			}
		}
		return true;
	}
	
	public static int genNext(int x, int y){
		if(avail[x][y].size() > 0){
			int nextSize = avail[x][y].size();
			int nextInd = gen.nextInt(nextSize);
			return nextInd;
		} else {
			return -1;
		}
	}
	
	// Makes a grid always using the first letter alphabetically, therefore its always the same
	public static void makeSimpleGrid(int x, int y){
		if(x == 9){
			return;
		}
		System.out.println(x + " " + y);
		if(grid[x][y] == ' '){
			grid[x][y] = 'A';
		} else {
			if(grid[x][y] == 'I'){
				grid[x][y] = ' ';
				if(x == 0){
					x -= 1;
					y = 7;
				} else {
					y -= 2;
				}
				makeSimpleGrid(x, y+1);
				return;
			} else {
				int index = "ABCDEFGHI".indexOf(grid[x][y]);
				grid[x][y] = "ABCDEFGHI".charAt(index+1);
			}
		}
		if(checkGrid(grid)){
			if(y == 8){
				x += 1;
				y = -1;
			}
			makeSimpleGrid(x,y+1);
		} else {
			char before = grid[x][y];
			int index = "ABCDEFGHI".indexOf(before);
			char after = ' ';
			if(before != 'I'){
				y -= 1;
			} else {
				grid[x][y] = ' ';
				if(x == 0){
					x -= 1;
					y = 7;
				} else {
					y -= 2;
				}
			}
			makeSimpleGrid(x, y+1);
		}
	}

	public static void makeAGrid(int x, int y){
		if(x == 9){
			return;
		}
		int hasNext = genNext(x,y);
		char next = ' ';
		if(hasNext > -1){
			next = avail[x][y].get(hasNext);
		}
		if(grid[x][y] == ' '){
			grid[x][y] = next;
			avail[x][y].remove(hasNext);
		} else {
			if(hasNext == -1){
				grid[x][y] = ' ';
				avail[x][y] = new ArrayList<Character>(Arrays.asList('A','B','C','D','E','F','G','H','I'));
				if(y == 0){
					x -= 1;
					y = 7;
				} else {
					y -= 2;
				}
				calls++;
				makeAGrid(x, y+1);
				return;
			} else {
				grid[x][y] = next;
				avail[x][y].remove(hasNext);
			}
		}
		if(checkGrid(grid)){
			if(y == 8){
				x += 1;
				y = -1;
			}
			calls++;
			makeAGrid(x,y+1);
		} else {
			if(hasNext > -1){
				y -= 1;
			} else {
				grid[x][y] = ' ';
				avail[x][y] = new ArrayList<Character>(Arrays.asList('A','B','C','D','E','F','G','H','I'));
				if(x == 0){
					x -= 1;
					y = 7;
				} else {
					y -= 2;
				}
			}
			calls++;
			makeAGrid(x, y+1);
		}
	}
	
	public static char[][] deleteSquares(char[][] grid, int cellsToRemove){
		int x = 0;
		int y = 0;
		for(int i=0; i<cellsToRemove; i++){
			x = gen.nextInt(9);
			y = gen.nextInt(9);
			if(grid[x][y] != ' '){
				grid[x][y] = ' ';
			} else {
				i--;
			}
		}
		return grid;
	}
	
	public static void printGrid(char[][] grid){
		System.out.println();
		for(int i=0; i<9; i++){
			if(i == 3 || i == 6){
				System.out.println("----------------------");
			}
			System.out.println(grid[i][0] + " " + grid[i][1] + " " + grid[i][2] + " | " + grid[i][3] + " " +
						grid[i][4] + " " + grid[i][5] + " | " + grid[i][6] + " " + grid[i][7] + " " + grid[i][8]);
		}
		return;
	}
	
	public static void main(String[] args) {
		long start = System.currentTimeMillis();

		colCollect[0] = new int[][] {{0,0},{1,0},{2,0},{3,0},{4,0},{5,0},{6,0},{7,0},{8,0}};
		colCollect[1] = new int[][] {{0,1},{1,1},{2,1},{3,1},{4,1},{5,1},{6,1},{7,1},{8,1}};
		colCollect[2] = new int[][] {{0,2},{1,2},{2,2},{3,2},{4,2},{5,2},{6,2},{7,2},{8,2}};
		colCollect[3] = new int[][] {{0,3},{1,3},{2,3},{3,3},{4,3},{5,3},{6,3},{7,3},{8,3}};
		colCollect[4] = new int[][] {{0,4},{1,4},{2,4},{3,4},{4,4},{5,4},{6,4},{7,4},{8,4}};
		colCollect[5] = new int[][] {{0,5},{1,5},{2,5},{3,5},{4,5},{5,5},{6,5},{7,5},{8,5}};
		colCollect[6] = new int[][] {{0,6},{1,6},{2,6},{3,6},{4,6},{5,6},{6,6},{7,6},{8,6}};
		colCollect[7] = new int[][] {{0,7},{1,7},{2,7},{3,7},{4,7},{5,7},{6,7},{7,7},{8,7}};
		colCollect[8] = new int[][] {{0,8},{1,8},{2,8},{3,8},{4,8},{5,8},{6,8},{7,8},{8,8}};
		
		gridCollect[0] = new int[][] {{0,0},{0,1},{0,2},{1,0},{1,1},{1,2},{2,0},{2,1},{2,2}};
		gridCollect[1] = new int[][] {{0,3},{0,4},{0,5},{1,3},{1,4},{1,5},{2,3},{2,4},{2,5}};
		gridCollect[2] = new int[][] {{0,6},{0,7},{0,8},{1,6},{1,7},{1,8},{2,6},{2,7},{2,8}};
		gridCollect[3] = new int[][] {{3,0},{3,1},{3,2},{4,0},{4,1},{4,2},{5,0},{5,1},{5,2}};
		gridCollect[4] = new int[][] {{3,3},{3,4},{3,5},{4,3},{4,4},{4,5},{5,3},{5,4},{5,5}};
		gridCollect[5] = new int[][] {{3,6},{3,7},{3,8},{4,6},{4,7},{4,8},{5,6},{5,7},{5,8}};
		gridCollect[6] = new int[][] {{6,0},{6,1},{6,2},{7,0},{7,1},{7,2},{8,0},{8,1},{8,2}};
		gridCollect[7] = new int[][] {{6,3},{6,4},{6,5},{7,3},{7,4},{7,5},{8,3},{8,4},{8,5}};
		gridCollect[8] = new int[][] {{6,6},{6,7},{6,8},{7,6},{7,7},{7,8},{8,6},{8,7},{8,8}};
		
		rowCollect[0] = new int[][] {{0,0},{0,1},{0,2},{0,3},{0,4},{0,5},{0,6},{0,7},{0,8}};
		rowCollect[1] = new int[][] {{1,0},{1,1},{1,2},{1,3},{1,4},{1,5},{1,6},{1,7},{1,8}};
		rowCollect[2] = new int[][] {{2,0},{2,1},{2,2},{2,3},{2,4},{2,5},{2,6},{2,7},{2,8}};
		rowCollect[3] = new int[][] {{3,0},{3,1},{3,2},{3,3},{3,4},{3,5},{3,6},{3,7},{3,8}};
		rowCollect[4] = new int[][] {{4,0},{4,1},{4,2},{4,3},{4,4},{4,5},{4,6},{4,7},{4,8}};
		rowCollect[5] = new int[][] {{5,0},{5,1},{5,2},{5,3},{5,4},{5,5},{5,6},{5,7},{5,8}};
		rowCollect[6] = new int[][] {{6,0},{6,1},{6,2},{6,3},{6,4},{6,5},{6,6},{6,7},{6,8}};
		rowCollect[7] = new int[][] {{7,0},{7,1},{7,2},{7,3},{7,4},{7,5},{7,6},{7,7},{7,8}};
		rowCollect[8] = new int[][] {{8,0},{8,1},{8,2},{8,3},{8,4},{8,5},{8,6},{8,7},{8,8}};

		
		// Initialize grid and avail
		for(char[] row : grid){
			Arrays.fill(row, ' ');
		}
		for(int i=0; i<9; i++){
			for(int j=0; j<9; j++){
				avail[i][j] = new ArrayList<Character>(Arrays.asList('A','B','C','D','E','F','G','H','I'));
			}
		}
		makeAGrid(0,0);
		long end = System.currentTimeMillis();
	//	System.out.println(end-start); // Time taken to make a board
		printGrid(grid);
		int x = 0, y = 0;
		// Make board playable
		grid = deleteSquares(grid, HARD);
//		System.out.println(calls); // Track number of total recursive calls made
		printGrid(grid);
	}

}
