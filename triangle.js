function myFunction(){
var side1 = parseInt(document.getElementById(side1).value);
var side2 = parseInt(document.getElementById(side2).value);
var side3 = parseInt(document.getElementById(side3).value);
if (side1==side2 && side1==side3 && side2==side3){
    alert("Equilateral");
    console.log("Equilateral");
}
    else if(side1==side2 && side1!==side3 && side2!==side3) {
        alert("Isosceles");
        console.log("Isosceles");
    }
    else if(side1!==side2 && side1!==side3 && side2!==side3){
        alert("Scalene");
        console.log("Scalene");
    }
}