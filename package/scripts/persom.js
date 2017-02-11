"use strict";
function Person(){
var firstname,lastname,phone,email;
this.setfirstname=function(fname){
    firstname=fname
}
this.setlastname=function(flast){
    lastname=flast
}

this.setphone=function(fphone){
    phone=fphone
}
this.setemail=function(femail){
    email=femail
}
this.getfirstname=function(){
    return firstname
}
    this.getlastname=function(){
        return lastname
  
}
    this.getphone=function(){
        return phone}
    this.getemail=function(){
        return email
    }
   
       
   
}

