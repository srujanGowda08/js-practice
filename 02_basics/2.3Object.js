// singleton
//object.create 

//object literals

const mySym = Symbol("key1");

const jsUser = {
    name: "srujan",
    "full name": "srujan gowda",
    [mySym]: "myKey",
    age: 25,
    gender: 'male',
    location: "hassan",
    loggedIn: true,
    lastLoginDays:["monday","tuesday"]
};


console.log(jsUser.gender);
console.log(jsUser["location"]);
console.log(jsUser["full name"]);
console.log(typeof jsUser[mySym]);

jsUser.location ="banglore";
//Object.freeze(jsUser);//prevent any changes to the object
jsUser.location ="dubai";

console.log(jsUser);


jsUser.greeting = function(){
    console.log("hello Js User");
}
jsUser.greetingnew= function(){
    console.log(`hello Js User,${this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingnew());