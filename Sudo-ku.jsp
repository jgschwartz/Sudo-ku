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
			href="http://en.wikipedia.org/wiki/Sudo">sudo command</a>. <br>The
		idea is to replace the normal numbers 1-9 with mounted computer drives
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
					<td><input name="sudo-01" type="text" maxLength="1" size="1">
						<!--  onblur="verifySingleInput(01)" --></td>
					<td><input name="sudo-02" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-03" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
					<td><input name="sudo-04" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-05" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-06" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-07" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-08" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-09" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-11" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-12" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-13" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-14" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-15" type="text" maxLength="1" size="1" value="A" readonly>
					</td>
					<td><input name="sudo-16" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-17" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-18" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-19" type="text" maxLength="1" size="1">
					</td>
				</tr>
				<tr>
					<td><input name="sudo-21" type="text" maxLength="1" size="1" value="A" readonly>
					</td>
					<td><input name="sudo-22" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-23" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-24" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-25" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-26" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
					<td><input name="sudo-27" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
					<td><input name="sudo-28" type="text" maxLength="1" size="1" value="E" readonly>
					</td>
					<td><input name="sudo-29" type="text" maxLength="1" size="1">
					</td>
				</tr>
				<tr>
					<td class="sep" colspan="11"></td>
				</tr>
				<tr>
					<td><input name="sudo-31" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-32" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-33" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-34" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-35" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-36" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-37" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-38" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-39" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-41" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-42" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-43" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-44" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-45" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-46" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-47" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-48" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-49" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-51" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-52" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-53" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-54" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-55" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-56" type="text" maxLength="1" size="1" value="E" readonly>
					</td>
					<td><input name="sudo-57" type="text" maxLength="1" size="1" value="F" readonly>
					</td>
					<td><input name="sudo-58" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-59" type="text" maxLength="1" size="1">
					</td>
				</tr>
				<tr>
					<td class="sep" colspan="11"></td>
				</tr>
				<tr>
					<td><input name="sudo-61" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-62" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-63" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
					<td><input name="sudo-64" type="text" maxLength="1" size="1" value="E" readonly>
					</td>
					<td><input name="sudo-65" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-66" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-67" type="text" maxLength="1" size="1" value="A" readonly>
					</td>
					<td><input name="sudo-67" type="text" maxLength="1" size="1" value="D" readonly>
					</td>
					<td><input name="sudo-69" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
				</tr>
				<tr>
					<td><input name="sudo-71" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-72" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-73" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-74" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-75" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-76" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-77" type="text" maxLength="1" size="1" value="I" readonly>
					</td>
					<td><input name="sudo-78" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-79" type="text" maxLength="1" size="1">
					</td>
				</tr>
				<tr>
					<td><input name="sudo-81" type="text" maxLength="1" size="1" value="H" readonly>
					</td>
					<td><input name="sudo-82" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-83" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-84" type="text" maxLength="1" size="1" value="B" readonly>
					</td>
					<td><input name="sudo-85" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-86" type="text" maxLength="1" size="1">
					</td>
					<td><input name="sudo-87" type="text" maxLength="1" size="1" value="C" readonly>
					</td>
					<td><input name="sudo-88" type="text" maxLength="1" size="1" value="G" readonly>
					</td>
					<td><input name="sudo-89" type="text" maxLength="1" size="1">
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
