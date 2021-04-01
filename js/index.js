function valimail(){
    var email=$("#email").val();
    var temp1=false;
    var email_regex=/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
    var password=$("#password").val();
    var temp2=false;
    var password_regex=/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    $("div.validationmail").hide();
    $("div.validationpass").hide();
    

    if(email_regex.test(email)!=false)
    {
        var temp1=true
        $('#email').css({border:'2px solid green'});
    }

    else
    {
        $("div.validationmail").show();
        $('#email').css({border:'2px solid red'});        
    }

    if(password_regex.test(password)!=false)
    {
        var temp2=true
        $('#password').css({border:'2px solid green'});
    }
    else{
        $("div.validationpass").show();
        $('#password').css({border:'2px solid red'});
    }


    if(temp1==true && temp2==true)window.location.href="main.html"
}
