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


