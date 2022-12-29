$(document).ready(function(){
    var myDate = new Date();
    var hrs = myDate.getHours();
    
    var greet;
    
    if (hrs < 12)
      greet = "Good Morning Everyone...";
    else if (hrs >= 12 && hrs <= 17)
      greet = "Good Afternoon  Everyone...";
    else if (hrs >= 17 && hrs <= 22)
      greet = "Good Evening Everyone...";
    else if (hrs >= 22 && hrs <= 24)
      greet = "Good Night Everyone...";
    
    // document.getElementById('headtext').innerHTML ='<b>' + greet + '</b>';
    $('#headtext').empty().append(greet +"You guys are real heroes!.");
}) 