function validation()
{
  $validate = true;

  // validate task name
  if(($("#task-name").val().length < 31) && ($("#task-name").val().length != 0) && ($("#task-name").val() != ""))
  {
    $("#task-name").attr("style", "border:1px solid #C2C2C2;");
  }
  else
  {
    $("#task-name").attr("style", "border:1px solid red;");
    $validate = false;
  }

  //validate task short description
  if(($("#task-sdesc").val().length < 51) && ($("#task-sdesc").val().length != 0) && ($("#task-sdesc").val() != ""))
  {
    $("#task-sdesc").attr("style", "border:1px solid #C2C2C2;")
  }
  else
  {
    $("#task-sdesc").attr("style", "border:1px solid red;");
    $validate = false;
  }

  //validate task rank
  if(($("#task-rank").val() < 201) && ($("#task-rank").val() >= 0) && ($("#task-rank").val() != "") && ($.isNumeric($("#task-rank").val())))
  {
    $("#task-rank").attr("style", "border:1px solid #C2C2C2;")
  }
  else
  {
    $("#task-rank").attr("style", "border:1px solid red;")
    $validate = false;
  }

  //validate task long description
  if(($("#task-ldesc").val().length < 501) && ($("#task-ldesc").val().length != 0) && ($("#task-ldesc").val() != ""))
  {
    $("#task-ldesc").attr("style", "border:1px solid #C2C2C2;")
  }
  else
  {
    $("#task-ldesc").attr("style", "border:1px solid red;")
    $validate = false;
  }

  //validate task status
  if(($("#task-status").val() == 1) || ($("#task-status").val() == 0))
  {
    $("#task-status").attr("style", "border:1px solid #C2C2C2;")
  }
  else
  {
    $("#task-status").attr("style", "border:1px solid red;")
    $validate = false;
  }

  //validate task type
  if(($("#task-type").val() == "G") || ($("#task-type").val() == "P"))
  {
    $("#task-type").attr("style", "border:1px solid #C2C2C2;")
  }
  else
  {
    $("#task-type").attr("style", "border:1px solid red;")
    $validate = false;
  }

  return $validate;

}
