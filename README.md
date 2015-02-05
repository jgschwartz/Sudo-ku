# Sudo-ku

![Sudo-ku Screenshot](https://cloud.githubusercontent.com/assets/10775357/6070568/9efcb7ea-ad5b-11e4-8457-f3af5a3a53e1.png)

Sudo-ku is a short project I built in about a week to see if I could make a Sudoku clone. I came up with the idea after seeing someone playing Sudoku and noticing the name of the "sudo" Unix command in the title. This was at least an interesting angle to take on the game, so I ran with it. Sudo-ku has the same rules as a normal game of Sudoku except the numbers 1-9 are replaced with disk drives A-I.

A working version of the site is available here:

http://jsfiddle.net/x73ramLm/3/embedded/result/

How To Play:

Click "Start Game" to start the timer and unlock the board. "Pause Game" pauses the timer and locks the board.

Fill each box with a letter A-I so that every row, grid, and column contains only one of each letter. Incorrect inputs are
disallowed with a warning appearing in the text area.

"Check Answers" determines if your guesses so far could make a valid Sudoku board, and direct you to the row, column, or grid of the issue if there is one.

"Submit" is only to be used when the board is completed. It validates the board in the same way as "Check Answers" but also makes sure every space has been filled. If the board is completed correctly, the timer stops and the a congratulatory message is displayed with the time taken to complete.

If you get stuck or finish the game, click "New Game" to instantly generate a new board to solve!
