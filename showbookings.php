<html>
<body>
<?php
$con = mysql_connect("localhost","root","sowmyasree");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}
mysql_select_db("bookings");
$result = mysql_query("SELECT * FROM bus where name= '$_POST[bname]'");
if(!$result)
{
echo "There is no records";
}
echo "<table border='1'>
<tr>
<th>bid</th>
<th>bname</th> 
<th>source</th>
<th>dest</th>
<th>agency</th>
</tr>";
while($row = mysql_fetch_array($result))
{
 echo "<tr>";
 echo "<td>" . $row['bid'] . "</td>";
 echo "<td>" . $row['bname'] . "</td>";
 echo "<td>" . $row['source'] . "</td>";
 echo "<td>" . $row['dest'] . "</td>";
 echo "<td>" . $row['agency'] . "</td>";
 echo "</tr>";
}
echo "</table>";
mysql_close($con);
?>
</body>
</html> 