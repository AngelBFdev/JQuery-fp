function login() {
  var user = $("#username").val()
  var password = $("#password").val()

  if (user == "admin" && password == "password") {
    doRedirect("home.html");
  }
  else {
    alert("You are not a valid user");
  }
};


function doRedirect(href) {
  window.location = href;
};
