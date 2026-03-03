function registerUser(){
    var user_name = document.forms["registerForm"]["regUser_Name"].value.trim()
    var password = document.forms["registerForm"]["regpassword"].value.trim()
    var cpassword = document.forms["registerForm"]["regcpassword"].value.trim()
    var name = document.forms["registerForm"]["regname"].value.trim()
    var address = document.forms["registerForm"]["regaddress"].value.trim()
    var city = document.forms["registerForm"]["regcity"].value.trim()
    var pincode = document.forms["registerForm"]["regpincode"].value.trim()

    if (user_name == "") {
        alert(" Please enter your User_Name! ")
        return false;
    }

    if (password.length <= 6){
        alert(" Password must be of 6 characters ")
        return false;
    }

    if (password != cpassword){
        alert(" Your Password and Confirm Password dosen't match with each other! ")
        return false;
    }

    if (name == "") {
        alert(" Enter Your name! ")
        return false;
    }

    if (address == ""){
        alert(" Enter Your Address! ")
        return false;
    }

    if (city == ""){
        alert(" Enter Your City Name! ")
        return false;
    }

    if (pincode.length <= 6){
        alert(" Enter Your State Pincode ")
        return false;
    }

    alert(" Registered Successfully! ")
    return true;
}