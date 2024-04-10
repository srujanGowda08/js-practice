//scope ={}

let a =20;
var b =30; //global scope
var c =0;


if(true){
    let a=25;
    console.log('Inner a:',a);
    var c=35;
}

console.log("Global a:",a)
console.log("c", c);// bcz var is not suited for block scopes

///************INTRESTING STUFF HERE******************/ */


console.log(addone(5));
function addone(value) {
    return num+1;
}




const addTwo = function(num){
    return num+2;
}

addTwo(5); // it can  be called as a normal function but it cannot be called without the declaration of the variable.
