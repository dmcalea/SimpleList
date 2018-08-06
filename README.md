Create "database-connection.php" in php directory with the following:

$dbHost = "";
$dbUsername = "";
$dbPassword = "";
$dbDatabase = "";

$db_conn = new MySQLi($dbHost, $dbUsername, $dbPassword, $dbDatabase);

if(mysqli_connect_errno())
{
  echo "Database connection error; please try again later.";
  exit();
}

Make sure to include your own credentials for $dbHost, $dbUsername, $dbPassword, and $dbDatabase.
