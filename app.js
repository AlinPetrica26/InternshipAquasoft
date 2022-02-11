let x=4;
let y=11;
let z= x+y;
console.log(z);


var a1=['Ana' , 'Alex'];
var a2=['Mihai' , ...a1];
console.log(a2);
 
function addNumber(x,y){
    console.log(x+y);
}
var nr=[2,4];
addNumber(...nr);

var arr1 = [1,2,3];
var arr2 = [4,5,6];
arr1=[...arr1,...arr2];
console.log(arr1);

let car = {
    color : "Red",
    speed : "165",
}
console.log(car);

let moto={...car};
moto.color="green";
moto.speed="200";
console.log(moto);