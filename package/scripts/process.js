"use strict";
function processForm(){
    event.preventDefault();
   var firstName,lastName,address,xresults;
    var flag=false;
    firstName=document.getElementById("firstName").value;
    //alert(firstName)//this var that what we dont use the brakets"" his known as varibale
     lastName=document.getElementById("lastName").value;
     address=document.getElementById("address").value;
    xresults=("firstName"+firstName);
    xresults+=("<br>lastName"+lastName);
    xresults+=("<br>address"+address);
    //console=(firstName.length);//you will see the name in the console and the numbers of charecters
    if (firstName.length==0){
        flag=true
    }
        
    if(lastName.length==0){
        flag=true;
    }
    if(address.length==0){
        flag=true;
    }
    if (flag){
        alert("error");
   
    }
    else{
        alert("Form submit");
        result(xresults);
    }
        
    
}

function result(paramresults){
        document.getElementById("result").innerHTML=paramresults;
        
    }