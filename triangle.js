function myProject(){
var side1 = parseInt(document.getElementById("side1").value);
var side2 = parseInt(document.getElementById("side2").value);
var side3 = parseInt(document.getElementById("side3").value);
var sides =["side1","side2","side3"];
sides.forEach(function(side){
    console.log(" side's number is " +  side  );
});
side1[0];
side2[1];
side3[2];

if(side1+side2>side3 &&
    side1+side3>side2 &&
    side2+side3>side1){

if (side1===side2 && side1===side3 && side2===side3){
    alert("Equilateral");
}
    else if(side1===side2 || side1===side3 || side2===side3) {
        alert("Isosceles");
    }

    else if(side1!==side2 && side1!==side3 && side2!==side3){
        alert("Scalene");
    }
}
    
    else{
        alert("not a triangle");
    }
};

