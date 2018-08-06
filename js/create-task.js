/*
Purpose of create-task.js is to add an empty form for the user to type their own tasks+details
TODO: form creation can only be done once.
*/

function addTask(location)
{
  $(location).prepend(
//creation of html form element with all necessary attributes
    $("<form>")
      .addClass("row-creation")
      .attr("name", "create-task")
      .attr("action", "php/create-task.php")
      .attr("onSubmit", "return validation();")
      .attr("method","POST")
      .append(
        $("<div>").addClass("quick-details").append(
          $("<div>").addClass("row-task-name").append(
            $("<input>")
              .attr("type", "text")
              .addClass("input-default editable task-name")
              .attr("id", "task-name")
              .attr("placeholder", "Task Name")
              .attr("name", "task-name")
          ),
          $("<div>").addClass("row-task-sdesc").append(
            $("<input>")
              .attr("type", "text")
              .addClass("input-default editable task-sdesc")
              .attr("id", "task-sdesc")
              .attr("placeholder", "Short Description")
              .attr("name", "task-sdesc")
          ),
          $("<div>").addClass("row-task-rank").append(
            $("<input>")
              .attr("type", "text")
              .addClass("input-default-rank editable task-rank")
              .attr("id", "task-rank")
              .attr("placeholder", "#")
              .attr("name", "task-rank")
          )
        ),
        $("<div>").addClass("more-details-creation").append(
          $("<div>").addClass("task-more-details").append(
            $("<div>").addClass("task-details").append(
              $("<textarea>")
                .addClass("input-default-details editable-details task-ldesc")
                .attr("id", "task-ldesc")
                .attr("placeholder", "Long Description")
                .attr("name", "task-ldesc")
            ),
            $("<div>").addClass("task-controls").append(
              $("<div>").addClass("task-status").append(
                $("<select>").addClass("input-default-select task-status").attr("id", "task-status").attr("name", "task-status").append(
                  $("<option>")
                    .val(1)
                    .text("Complete"),
                  $("<option>")
                    .val(0)
                    .text("Incomplete")
                    .attr("selected", true)
                )
            ),
              $("<div>").addClass("task-type").append(
                $("<select>").addClass("input-default-select task-type").attr("id", "task-type").attr("name", "task-type").append(
                  $("<option>")
                    .val("G")
                    .text("General")
                    .attr("selected", true),
                  $("<option>")
                    .val("P")
                    .text("Priority")
                )
            ),
              $("<div>").addClass("task-btn").append(
                $("<button>")
                .addClass("btn")
                .text("Create")

              )
            )
          )
        )
      )
  );
}
