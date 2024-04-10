const user = {
    userName : "srujan",
    price : 999,

    welcomeMessage : function () {
        console.log(`${this.userName}, Welcome to our website`);
        console.log(this);
    }
}

// user.welcomeMessage();
// user.userName ="sam";
// user.welcomeMessage();

console.log(this);// this refers to the global object in browser and nodejs


// function tryBro() {
//     console.log(this);// this refers to the function object
// }

// tryBro();


const chai = () =>{
    let user  = "srujan"
    console.log(this.user);
}


// const addTwo = (num1, num2) =>{
//     return  num1 + num2;    
// }

// const addTwo = (num1, num2) => num1 + num2;

const addTo = (num1, num2) => (num1 + num2);

const addTwo = (num1, num2) => ({username: "srujan"});



console.log(addTwo(10,20));