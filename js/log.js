function loginUser(){
    var user_name = document.forms["loginForm"]["loguser_name"].value.trim()
    var password = document.forms["loginForm"]["logpassword"].value.trim()
    
    if (user_name != "Sathwik"){
        alert("The User_Name is incorrect!")
        return false;
    }

    if (password != "Cssr1234"){
        alert("The Password is incorrect!")
    }
    alert("Login is Done Successfully")
    window.location.href = "index.html"
    return true;
}