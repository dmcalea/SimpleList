<?php

  include('/var/www/html/new/php/database-connection.php');

  $taskid = $_POST['taskid'];
  $tname = $_POST['taskName'];
  $sdesc = $_POST['sDesc'];
  $tpriority = $_POST['rank'];
  $ldesc = $_POST['lDesc'];
  $tstatus = $_POST['status'];
  $ttype = $_POST['type'];

  $query = "UPDATE task_list SET task_Name = '$tname', task_ShortDesc = '$sdesc', task_LongDesc = '$ldesc', task_List = '$ttype', task_Priority = '$tpriority', task_Status = '$tstatus' WHERE task_ID = '$taskid'";

  $result = $db_conn->query($query);

  echo "Updated task!";


?>
