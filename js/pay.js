function payUser(){
    var cardholder = document.forms["payform"]["paycardholder"].value.trim()
    var cardno = document.forms["payform"]["paycardno"].value.trim()
    var expiry = document.forms["payform"]["payexpiry"].value.trim()
    var cvv = document.forms["payform"]["paycvv"].value.trim()

    if (cardholder == ""){
        alert(" Enter the name of the Card Holder! ")
        return false
    }

    if (cardno.length <= 11){
        alert(" Enter the Correct Card No.! ")
        return false;
    }

    if (expiry.length != 5){
        alert(" Please Enter valid expiry date in the MM/YY form! ")
        return false;
    }

    if (cvv.length != 3){
        alert(" Please Enter Correct CVV No.! ")
        return false;
    }
    
    alert(" Product Ordered Successfully! ")
    window.location.href = "Conform.html"
    return true;
}