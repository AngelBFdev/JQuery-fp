function login() {
  var username = $("#username").val()
  var password = $("#password").val()
  if(username=="admin" && password=="password"){
    alert("You are a valid user");
  }
  else{
    alert("You are not a valid user");
  }
};
