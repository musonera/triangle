function myFunction(){
var side1 = document.getElementById(sideOne).value;
var side2 = document.getElementById(sideTwo).value;
var side3 = document.getElementById(sideThree).value;

if (side1===side2 && side1===side3 && side2===side3){
    alert("Equilateral");
}
    else if(side1===side2 || side1===side3 || side2===side3) {
        alert("Isosceles");
    }
    else if(side1!==side2 && side1!==side3 && side2!==side3){
        alert("Scalene");
    }
    else{
        alert("not a triangle");
    }
}