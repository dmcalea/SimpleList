/*
Purpose of populate-tasks.js is to add tasks to page depending on function input.

*/

function populateTasks(taskTypeQuery, taskComplete, total, location)
{

  $.ajax({
      url: 'php/get-tasks.php',
      data: {
        taskTypeQuery: taskTypeQuery,
        total: total,
        taskComplete: taskComplete
      },
      type: 'POST',
      dataType: 'json',
      success: function(result)
      {
        $taskName = result[0];
        $taskShortDesc = result[1];
        $taskRank = result[2];
        $taskLongDesc = result[3];
        $taskType = result[4];
        $taskStatus = result[5];
        $taskID = result[6];

        for($i=0; $i<$taskName.length; $i++)
        {

          if($taskStatus[$i] == 1)
          {
            $taskStatusElement = $("<select>").addClass("input-default-select task-status").attr("disabled", true).append(
              $("<option>")
                .val(1)
                .text("Complete")
                .attr("selected", true),
              $("<option>")
                .val(0)
                .text("Incomplete")
            )
          }
          else
          {
            $taskStatusElement = $("<select>").addClass("input-default-select task-status").attr("disabled", true).append(
              $("<option>")
                .val(1)
                .text("Complete"),
              $("<option>")
                .val(0)
                .text("Incomplete")
                .attr("selected", true)
            )
          }

          if($taskType[$i] == "P")
          {
            $taskTypeElement = $("<select>").addClass("input-default-select task-type").attr("disabled", true).append(
              $("<option>")
                .val("G")
                .text("General"),
              $("<option>")
                .val("P")
                .text("Priority")
                .attr("selected", true)
            )
          }
          else if($taskType[$i] == "G")
          {
            $taskTypeElement = $("<select>").addClass("input-default-select task-type").attr("disabled", true).append(
              $("<option>")
                .val("G")
                .text("General")
                .attr("selected", true),
              $("<option>")
                .val("P")
                .text("Priority")
            )
          }
          else
          {
            $taskTypeElement = $("<select>").addClass("input-default-select task-type").attr("disabled", true).append(
              $("<option>")
                .val("G")
                .text("General")
                .attr("selected", true),
              $("<option>")
                .val("P")
                .text("Priority")
            )
          }

          $(location).append(
            $("<div>")
              .addClass("row")
              .append(
                $("<div>").addClass("quick-details").append(
                  $("<div>").addClass("row-task-name").append(
                    $("<input>")
                      .attr("type", "text")
                      .addClass("input-default non-editable task-name")
                      .attr("value", $taskName[$i])
                      .attr("readonly", true)
                      .attr("name", "task-name")
                  ),
                  $("<div>").addClass("row-task-sdesc").append(
                    $("<input>")
                      .attr("type", "text")
                      .addClass("input-default non-editable task-sdesc")
                      .attr("value", $taskShortDesc[$i])
                      .attr("readonly", true)
                  ),
                  $("<div>").addClass("row-task-rank").append(
                    $("<input>")
                      .attr("type", "text")
                      .addClass("input-default-rank non-editable task-rank")
                      .attr("value", $taskRank[$i])
                      .attr("readonly", true)
                  )
                ),
                $("<div>").addClass("more-details").append(
                  $("<div>").addClass("task-more-details").append(
                    $("<div>").addClass("task-details").append(
                      $("<textarea>")
                        .text($taskLongDesc[$i])
                        .addClass("input-default-details non-editable-details task-ldesc")
                        .attr("readonly", true)
                    ),
                    $("<div>").addClass("task-controls").append(
                      $("<div>").addClass("task-status").append($taskStatusElement),
                      $("<div>").addClass("task-type").append($taskTypeElement),
                      $("<div>").addClass("task-btn").append(
                        $("<button>")
                        .addClass("btn")
                        .text("Edit")
                        .val($taskID[$i])
                      )
                    )
                  )
                )
              )
            )
        }
      },
      error: function()
      {
        alert("Error.");
      }
  });

}
