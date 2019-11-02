function week9(){
    var y;
    var thatone = confirm('You are about to leave this page, Are you sure you want to leave?');
 if (thatone == true){
     y = "You pressed OKAY";
 }
else if(thatone == false){
    y = "You Pressed CANCEL";
}
document.getElementById("me").innerHTML = y;
}