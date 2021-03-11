
function hidden_1y(){
    $('#pray_1y').css("visibility","hidden");
}
function hidden_ally(){
    $('#pray_ally').css("visibility","hidden")
}
function show_1y(){
    $('#pray_1y').css("visibility","visible");
}
function show_ally(){
    $('#pray_ally').css("visibility","visible")
}
function uncheck_1y() {
    $('#check_1year').prop("checked", false);
}
function uncheck_ally(){
    $('#check_allyear').prop("checked", false);
}
function validatEemail() {
    var x = $('.input_email').val();
    var atposition = x.indexOf("@");
    var dotposition = x.lastIndexOf(".");
    if (atposition < 1 || dotposition < (atposition + 2)
            || (dotposition + 2) >= x.length) {
        alert("Please enter a valid e-mail address.");
        return false;
    }
}
function validaPhone(){
    var vnf_regex = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    var mobile = $('.input_phone').val();
    if(mobile !==''){
        if (vnf_regex.test(mobile) == false) 
        {
            alert('Your phone number is not in the correct format!');
        }else{
            alert('Your phone number is valid!');
        }
    }else{
        alert('You have not entered your phone number!');
    }
}
$(document).ready(function(){
    var a = 0;
    var b = 0;
    // jQuery methods go here...
    $('#check_1year').change(function(){
        if(this.checked){
            a = 1;
        }
        else{
            a = 0;
        }
        if(parseInt(a) == 1){
            show_1y();
            hidden_ally();
            uncheck_ally();
        }
        if(parseInt(a) == 0){
            hidden_1y();
        }
    });
   $('#check_allyear').change(function(){
        if(this.checked){
            b = 1;
        }
        else {
            b = 0;
        }
        if(parseInt(b) == 1){
            show_ally();
            hidden_1y();
            uncheck_1y();
        }
        if(parseInt(b) == 0){
            hidden_ally();
        }
   });

   $('.input_phone').blur(function(){
    validaPhone();
   });

   $('.input_email').blur(function(){
    validatEemail();
   });

});