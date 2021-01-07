function Submit(){
  var email = document.getElementById("email").value;
  var password = document.getElementById("password").value;

  if (email == "example@google.com" && password == "123456"){
    document.body.style.backgroundColor = "green";
    document.getElementById("identification").innerHTML = "Login was a success.";
  }
  else{
    document.body.style.backgroundColor = "red";
    document.getElementById("identification").innerHTML = "Invalid Credentials."
  }
}