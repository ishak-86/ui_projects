function importformelements(){
     event.preventDefault();
    var personobj=new Person();
   
    personobj.setfirstname($("#firstName").val());
    personobj.setlastname($("#lastName").val());
    personobj.setphone($("#phone").val());
    personobj.setemail($("#email").val());
    console.log ("test for objretd");
    return personobj;
    //var result=personobj.getfirstnaame+"<br>";
   //// result+=personobj.getfirstname()+"<br>";
     //  result+=personobj.getphone()+"<br>";
        //result+=personobj.getemail()+"<br>";
    //console.log(result);
}
//evnet for this button
function submit(){
    var tempObj=importformelements();
    personlist.push(tempObj);
    render();
    
}

    //render html contents
function render() {
    var results = "";
   // var tempArray = ["apple,ban,car,oni"];
    
    
    personlist.forEach(function(personobj) {
        results+="<tr>";
        results+="<td>"+personobj.getfirstname()+"</td>";
        results+="<td>"+personobj.getlastname()+"</td>";
        results+="<td>"+personobj.getphone()+"</td>";
        results+="<td>"+personobj.getemail()+"</td>";
        results+="</tr>";
        
    
         $("#resultTbl tbody").html(results);
        });
}
   

  