<html>
<body>

<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bookings";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO buses (yname,bname,spoint)
VALUES ('$_POST[yname]', '$_POST[bname]', '$_POST[spoint]')";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
<form action="searchresult.php" method="post">
Your Name: <input type="text" name="yname" />
<input type="submit" />
</form>
</body>
</html>