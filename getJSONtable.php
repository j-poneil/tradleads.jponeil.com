<?php
// the info needed to connect to the db, which I obviously don't want to publish on github
// gives access to the variables:
// $serveraddress, $my_user, $my_password, $my_db
include 'env.php';

// This PHP code connects to the SQL server, does a query to retrieve all table data
// Then it echos it so that the javascript that made a request for it can receive it
// Meaning that this table data will be made available for the javascript to manipulate

$con = mysqli_connect($serveraddress,$my_user,$my_password,$my_db);
if (!$con) {
    die('Could not connect: ' . mysqli_error($con));
}

$sql = "SELECT * FROM `TABLE 1`";
$result = mysqli_query($con,$sql);

$tableArray = array();
// While loop is necissary to go through ALL the data from the SQL query
while($row = mysqli_fetch_array($result)){
	// Removing numeric keys: "0", "1", "2", ... "12"
	// So that only keys such as "#", "date", "name", etc... remain
	// Meaning no duplicate entries in the final JSON object
	for($i = 0; $i < 13; $i++){
		if(array_key_exists((string)$i, $row)){
			unset($row[(string)$i]);
		}
	}
	$tableArray[] = $row;
};

echo json_encode($tableArray);

mysqli_close($con);
?>
