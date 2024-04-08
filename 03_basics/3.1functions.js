// function add(a, b){
//     return a + b;
// }

function add(num1,num2){
    let result = num1 + num2;
    return result;
    console.log("name");//it will not execute
}

const result = add(5,6)

// console.log(result);


function loginUserMsg ( username= "sujan"){
    if(!username){
        console.log("Please provide a valid user name");
        return
    }
    return `${username}, you are logged in`
}

console.log(loginUserMsg("sam"));




function calculateCartPrice(val1,val2,...num1) {
    return num1;
}

console.log(calculateCartPrice(10,20,30)); // 30


const user={
    name: "sruja",
    age: 20
}

function objectHandle(anyobject){
    console.log(`username is ${anyobject.name} and the age is ${anyobject.age}`)
}

objectHandle(user);
objectHandle({
    name:"sam",
    age:90
});


const arr =[200,400,100,600,500];

function arrayHandle(anyarray) {
    return anyarray[1];
}

console.log(arrayHandle(arr));
console.log(arrayHandle([400,900,6]));