function myProject(){
var side1 = document.getElementById("side1").value;
var side2 = document.getElementById("side2").value;
var side3 = document.getElementById("side3").value;

if (side1===side2 && side1===side3 && side2===side3){
   console.log( alert("Equilateral"));
}
    else if(side1===side2 || side1===side3 || side2===side3) {
        alert("Isosceles");
    }

    else if(side1!==side2 && side1!==side3 && side2!==side3){
        alert("Scalene");
    }
    else if(side1+side2<=side3 ||side1+side3<=side2) {
        alert("not a triangle");
    }
    else{
        alert("invalid");
    }
}