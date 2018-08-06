/*
Purpose of Control.js is for interactivity of HTML elements.

*/

$(document).ready(function() {

//creates an empty task form for the user to submit their own task
  $("#add-task-priority").on("click", function(){
    addTask("#priority-tasks");
  });

  $("#add-task-general").on("click", function(){
    addTask("#general-tasks");
  });

//prevents the slideToggle while clicking on the input fields
  $(".row-container").on("click", ".input-default", function(e){
    if($(this).hasClass("editable"))
    {
      e.stopPropagation();
    }
  });

  $(".row-container").on("click", ".input-default-rank", function(e){
    if($(this).hasClass("editable"))
    {
      e.stopPropagation();
    }
  });

  $(".row-container").on("click", ".input-default-details", function(e){
    if($(this).hasClass("editable"))
    {
      e.stopPropagation();
    }
  });

  $(".row-container").on("click", ".input-default-select", function(e){
    e.stopPropagation();
  });

  /*   *   *   *   *   *   *   *   *   */

/*
functionality of clicking the edit/save/create button
edit: changes all fields to an editable state
save: overwrites the pre-existing data entries with new entries the user typed
create: adds the fields to the database

TODO: saving only when there is a change

*/

  $(".row-container").on("click", ".btn", function(e){
    e.stopPropagation();

    $taskInputGeneral = $(this).parentsUntil(".row-container").find(".input-default");
    $taskInputRank = $(this).parentsUntil(".row-container").find(".input-default-rank");
    $taskInputDetails = $(this).parentsUntil(".row-container").find(".input-default-details");
    $taskInputSelect = $(this).parentsUntil(".row-container").find(".input-default-select");

    $taskName = $(this).parentsUntil(".row-container").find(".task-name").val();
    $taskSdesc = $(this).parentsUntil(".row-container").find(".task-sdesc").val();
    $taskRank = $(this).parentsUntil(".row-container").find(".task-rank").val();
    $taskLdesc = $(this).parentsUntil(".row-container").find(".task-ldesc").val();
    $taskStatus = $(this).parentsUntil(".row-container").find(".task-status").find(":selected").val();
    $taskType = $(this).parentsUntil(".row-container").find(".task-type").find(":selected").val();

    if($(this).text() == "Edit")
    {
      $(this).text("Save");

      $taskInputGeneral
        .attr("readonly", false)
        .removeClass("non-editable")
        .addClass("editable");

      $taskInputRank
        .attr("readonly", false)
        .removeClass("non-editable")
        .addClass("editable");

      $taskInputDetails
        .attr("readonly", false)
        .removeClass("non-editable-details")
        .addClass("editable");

      $taskInputSelect
        .attr("disabled", false);
    }
    else if($(this).text() == "Save")
    {
      $.ajax({
        type: 'POST',
        url: 'php/update-task.php',
        data: {
          taskid: $(this).val(),
          taskName: $taskName,
          sDesc: $taskSdesc,
          rank: $taskRank,
          lDesc: $taskLdesc,
          status: $taskStatus,
          type: $taskType
        },
        success: function(response)
        {
          //alert(response);
          location.reload(true);
        },
        error: function()
        {
          alert("Error.");
        }
      });

      $(this).text("Edit");

      $taskInputGeneral
        .attr("readonly", true)
        .removeClass("editable")
        .addClass("non-editable");

      $taskInputRank
        .attr("readonly", true)
        .removeClass("editable")
        .addClass("non-editable");

      $taskInputDetails
        .attr("readonly", true)
        .removeClass("editable")
        .addClass("non-editable-details");

      $taskInputSelect
        .attr("disabled", true);
    }
    else if($(this).text() == "Create")
    {
      $(this).parentsUntil(".row-container").find(".row-creation").addClass("confirmation");
    }

  });

  /*   *   *   *   *   *   *   *   *   */

//if the user slideToggles while the form is in an editing state it will be changed back to a non-editing state
  $(".row-container").on("click", ".row", function(){
    $(this).find(".more-details").slideToggle(300);

    $taskInputButton = $(this).find(".btn");
    $taskInputGeneral = $(this).find(".input-default");
    $taskInputRank = $(this).find(".input-default-rank");
    $taskInputDetails = $(this).find(".input-default-details");
    $taskInputSelect = $(this).find(".input-default-select");

    if($taskInputButton.val() != "Edit")
    {

      $taskInputButton.text("Edit");

      $taskInputGeneral
        .attr("readonly", true)
        .removeClass("editable")
        .addClass("non-editable");

      $taskInputRank
        .attr("readonly", true)
        .removeClass("editable")
        .addClass("non-editable");

      $taskInputDetails
        .attr("readonly", true)
        .removeClass("editable")
        .addClass("non-editable-details");

      $taskInputSelect
        .attr("disabled", true);
    }

  });

});
