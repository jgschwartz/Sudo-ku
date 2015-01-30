<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<link rel="stylesheet" type="text/css" href="SudoCSS.css" />
<title>Sudo-ku</title>
</head>
<body>
	<h1>Welcome to Sudo-ku</h1>
	<br>
	<p>
		Sudo-ku is an attempt to recreate the popular game of Sudoku with a
		slight CS spin. It's based on the <a
			href="http://en.wikipedia.org/wiki/Sudo">sudo command</a>. <br>Instead of a normal game of Sudoku
			with numbers 1-9, this game is played with mounted computer drives
		A-I. Make each row, column, and square have one and only one of each
		drive.
	</p>
	<br>
	<div class="container">
		<div class="grid">
			<table>
				<tr>
					<th></th>
					<th></th>
					<th></th>
					<th class="sep" rowspan="20"></th>
					<th></th>
					<th></th>
					<th></th>
					<th class="sep" rowspan="20"></th>
					<th></th>
					<th></th>
					<th></th>
				</tr>
				<tr>
					<td><input name="sudo-01" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-02" class="hint" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-03" class="hint" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
					<td><input name="sudo-04" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-05" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-06" class="hint" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-07" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-08" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-09" class="hint" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-11" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-12" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-13" class="hint" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-14" class="hint" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-15" class="hint" type="text" maxLength="1" size="1" value="A" readonly>
					</td>
					<td><input name="sudo-16" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-17" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-18" class="hint" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-19" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-21" class="hint" type="text" maxLength="1" size="1" value="A" readonly>
					</td>
					<td><input name="sudo-22" class="hint" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-23" class="hint" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-24" class="hint" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-25" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-26" class="hint" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
					<td><input name="sudo-27" class="hint" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
					<td><input name="sudo-28" class="hint" type="text" maxLength="1" size="1" value="E" readonly>
					</td>
					<td><input name="sudo-29" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
				</tr>
				<tr>
					<td class="sep" colspan="11"></td>
				</tr>
				<tr>
					<td><input name="sudo-31" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-32" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-33" class="hint" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-34" class="hint" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-35" class="hint" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-36" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-37" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-38" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-39" class="hint" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-41" class="hint" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-42" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-43" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-44" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-45" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-46" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-47" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-48" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-49" class="hint" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-51" class="hint" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-52" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-53" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-54" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-55" class="hint" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-56" class="hint" type="text" maxLength="1" size="1" value="E" readonly>
					</td>
					<td><input name="sudo-57" class="hint" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-58" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-59" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
				</tr>
				<tr>
					<td class="sep" colspan="11"></td>
				</tr>
				<tr>
					<td><input name="sudo-61" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-62" class="hint" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-63" class="hint" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
					<td><input name="sudo-64" class="hint" type="text" maxLength="1" size="1" value="E" readonly>
					</td>
					<td><input name="sudo-65" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-66" class="hint" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-67" class="hint" type="text" maxLength="1" size="1" value="A" readonly>
					</td>
					<td><input name="sudo-67" class="hint" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
					<td><input name="sudo-69" class="hint" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-71" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-72" class="hint" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-73" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-74" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-75" class="hint" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-76" class="hint" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-77" class="hint" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-78" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-79" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-81" class="hint" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-82" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-83" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-84" class="hint" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
					<td><input name="sudo-85" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-86" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
					<td><input name="sudo-87" class="hint" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-88" class="hint" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-89" class="guess" type="text" maxLength="1" size="1" readonly>
					</td>
				</tr>
			</table>
		</div>
		<div class="options">
			<input type="button" id="start" value="Start Game">
			<textarea id="timer" readonly>0:00</textarea>
			<input type="button" id="pause" value="Pause Game" disabled>
			<br>
			<textarea id="alert" readonly></textarea>
			<br>
			<input type="button" id="submit" value="Submit" /> <input type="button" id="validate"
				value="Check Answers" />
		</div>
		<br style="clear:both;"/> <!-- allows floating grid to left and alerts/buttons to right -->
	</div>
	<br>
	<br>
	<div class="explanation">
		<p>Explanation of the drives:</p>
		<ul>
			<li>A and B: Floppy disk drives</li>
			<li>C: First hard disk partition, typically the local drive</li>
			<li>D: Next drive partition, often an optical drive</li>
			<li>E-I: Additional partitions</li>
		</ul>
	</div>
	<br>
	<p>This page made by Jared Schwartz &copy 2015</p>
	<script type="text/javascript"
		src="http://code.jquery.com/jquery-2.1.1.min.js"></script>
	<script type="text/javascript" src="SudoJS.js"></script>
</body>
</html>
