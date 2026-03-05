function editUser(){
    var user_name = document.forms["editprofile"]["edituser"].value.trim()
    var email = document.forms["editprofile"]["editemail"].value.trim()
    var phone = document.forms["editprofile"]["editphone"].value.trim()
    var address = document.forms["editprofile"]["editaddress"].value.trim()

    if (user_name == ""){
        alert(" Write a user name! ")
        return false;
    }

    if (email == ""){
        alert(" Enter your email address! ")
        return false;
    }

    if (phone.length <= 9){
        alert("Please Enter your phone number! ")
        return false;
    }

    if (address == ""){
        alert(" Enter your address! ")
        return false;
    }

    alert(" You edited your profile successfully! ")
    window.location.href = "UserProfile.html"
    return true;
}