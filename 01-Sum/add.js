function add() {
  var a = $("#num1").val();
  var b = $("#num2").val();
  var c = parseInt(a) + parseInt(b);
  if (isNaN(b) || isNaN(a))
    $("#total").val('NaN');
  else
    $("#total").val(c);
};
