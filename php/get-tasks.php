<?php

  $taskTypeQuery = $_POST['taskTypeQuery'];
  $taskComplete = $_POST['taskComplete'];
  $total = $_POST['total'];

  if($taskTypeQuery == 'G')
  {
    $order = "task_ID";
  }
  elseif($taskTypeQuery == 'P')
  {
    $order = "task_Priority";
  }

  if($taskComplete == 1)
  {
    $status = 1;
  }
  elseif($taskComplete == 0)
  {
    $status = 0;
  }

  $query = "SELECT * FROM task_list WHERE task_List = '$taskTypeQuery' AND task_Status = $status ORDER BY $order DESC LIMIT $total";

  include('/var/www/html/new/php/database-connection.php');


  $result = $db_conn->query($query);

  if($result->num_rows)
  {
    //$tempArray = array();

    $taskName = array();
    $taskShortDesc = array();
    $taskRank = array();
    $taskLongDesc = array();
    $taskType = array();
    $taskStatus = array();
    $taskID = array();

    $taskDetails = array();

    while($info = $result->fetch_assoc())
    {
      //array_push($tempArray, $info['task_Name']);

      array_push($taskName, $info['task_Name']);
      array_push($taskShortDesc, $info['task_ShortDesc']);
      array_push($taskRank, $info['task_Priority']);
      array_push($taskLongDesc, $info['task_LongDesc']);
      array_push($taskType, $info['task_List']);
      array_push($taskStatus, $info['task_Status']);
      array_push($taskID, $info['task_ID']);

    }

    array_push($taskDetails, $taskName);
    array_push($taskDetails, $taskShortDesc);
    array_push($taskDetails, $taskRank);
    array_push($taskDetails, $taskLongDesc);
    array_push($taskDetails, $taskType);
    array_push($taskDetails, $taskStatus);
    array_push($taskDetails, $taskID);

    echo json_encode($taskDetails);

    //echo json_encode($tempArray);
  }


?>
