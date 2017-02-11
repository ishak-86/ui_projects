/*var calculator = function (){
    class calculator {
    private float x;\
    private float y;
    */

    
function calculator(){
    var x;
    var y;
    //mutators
    this.setX=function(valx){
        x=valx;
    }
    this.setY=function(valy)
    {
        y= valy;
    }
    //Accessors
    this.getX=function(){
        return x;
    }
    this.getY=function(){
            return y;
    }
    this.add = function(){
    console.log(typeof(x));
        return x+y;

    }
    this.substract = function ()
    {return x-y;
    }
    this.multiply = function ()
    {
        return x*y;
    }

    this.divid= function (){
        return x/y;
    }
    this.testingOutput=function()
    {

        console.log("Addition="+this.add());
        console.log("substraction="+this.substract());
        console.log("multiplication="+this.multiply());
        console.log("division="+this.divid());
        
        document.getElementById("add").innerHTML=this.add();
        document.getElementById("substract").innerHTML=this.substract();
        document.getElementById("multiply").innerHTML=this.multiply();
        document.getElementById("divid").innerHTML=this.divid();
    }
}
 var calculatorobj = new calculator();
calculatorobj.setX(10);
calculatorobj.setY(20);
console.log("x ="+calculatorobj.getX());
console.log("y ="+calculatorobj.getY());
calculatorobj.testingOutput();