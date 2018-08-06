<?php

echo "Task Name: " . $_POST['task-name'];
echo " | Task Short Desc: " . $_POST['task-sdesc'];
echo " | Task Rank: " . $_POST['task-rank'];
echo " | Task Long Desc: " . $_POST['task-ldesc'];
echo " | Task Status: " . $_POST['task-status'];
echo " | Task Type: " . $_POST['task-type'];

$taskName = $_POST['task-name'];
$taskSdesc = $_POST['task-sdesc'];
$taskRank = $_POST['task-rank'];
$taskLdesc = $_POST['task-ldesc'];
$taskStatus = $_POST['task-status'];
$taskType = $_POST['task-type'];

if( (strlen($taskName) < 31) && (strlen($taskName) != 0) && ($taskName != "") )
{
  echo "<br> Task Name Passed";

  if( (strlen($taskSdesc) < 51) && (strlen($taskSdesc) != 0) && ($taskSdesc != "") )
  {
    echo "<br> Task Short Desc Passed";

    if( ($taskRank < 201) && (strlen($taskRank) >= 0) && ($taskRank != "") && (!is_nan($taskRank)) )
    {
      echo "<br> Task Rank Passed";

      if( (strlen($taskLdesc) < 501) && (strlen($taskLdesc) != 0) && ($taskLdesc != "") )
      {
        echo "<br> Task Short Desc Passed";

        if(($taskStatus == 1) || ($taskStatus == 0))
        {
          echo "<br> Task Status Passed";

          if(($taskType == "G") || ($taskType == "P"))
          {
            echo "<br> Task Type Passed";

            include('database-connection.php');

            if(mysqli_connect_errno())
            {
              echo "Database connection error; please try again later.";
              exit();
            }

            $taskid = "NULL";

            $createTaskQuery = "INSERT INTO task_list VALUES (?, ?, ?, ?, ?, ?, ?)";

            $stmt = $db_conn->prepare($createTaskQuery);
            $stmt->bind_param("sssssii", $taskid, $taskName, $taskSdesc, $taskLdesc, $taskType, $taskRank, $taskStatus);
            $stmt->execute();

            echo "Done!";
          }
          else
          {
            echo "<br> Task Type Failed";
          }
        }
        else
        {
          echo "<br> Task Status Failed";
        }
      }
      else
      {
        echo "<br> Task Short Desc Failed";
      }
    }
    else
    {
      echo "<br> Task Rank Failed";
    }
  }
  else
  {
    echo "<br> Task Short Desc Failed";
  }
}
else
{
  echo "<br> Task Name Failed";
}

?>
