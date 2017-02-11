 var personlist=[];
$(document).ready(function(){
    
    var personobj1 =new Person();
     var personobj2 =new Person();
     var personobj3 =new Person();
    personobj1.setfirstname("george");
    personobj1.setlastname("washington");
    personobj1.setphone("2134567656");
    personobj1.setemail("george@gmail.com");
    
    personobj2.setfirstname("ishak");
    personobj2.setlastname("washington");
    personobj2.setphone("2134598756");
    personobj2.setemail("ishak@gmail.com");
    
    personobj3.setfirstname("george");
    personobj3.setlastname("washington");
    personobj3.setphone("2134567656");
    personobj3.setemail("george@gmail.com");
    
    
    personlist.push(personobj1);
    personlist.push(personobj2);
    personlist.push(personobj3);
    render();

    
    
    //for(var i=0;i<3;i++){
        //var test=new Person();
        //test.setfirstname
        
    
    $("#add").on("click",submit);
   
    
});