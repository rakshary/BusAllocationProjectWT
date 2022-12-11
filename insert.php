<html>
<body>
<?php
$con = mysql_connect("localhost","root");
if (!$con)
{
die('Could not connect: ' . mysql_error());
}
mysql_select_db("bookings");
$sql="INSERT INTO bus (bid,bname,source,dest,agency)
 VALUES
('$_POST[bid]','$_POST[bname]','$_POST[source]','$_POST[dest]','$_POST[agency]')";
if (!mysql_query($sql,$con))
{
die('Error: ' . mysql_error());
}
echo "1 record added";
mysql_close($con)
?>
<form action="showbookings.php" method="post">
Name: <input type="text" name="Title" />
<input type="submit" />
</form>
</body>
</html> 
