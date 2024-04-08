// const instagramuser = new Object();

const instaUser ={};

instaUser.id = "123abc";
instaUser.name = "jhon";
instaUser.loggedIn =  true;

// console.log(instagram);

const regularUser = {
    id:"5458abc",
    name:{
        fullName:{
            firstName:"jhon",
            middleName:null,
            lastName:"doe"
        }
    }
}

//console.log(regularUser.name.fullName.firstName);

const obj1 = {1 : "a", 2: "b"};
const obj2 ={3 : "c", 4: "d"};

// const obj3 ={obj1,obj2};

// const obj3 = Object.assign({},obj1,obj2); 

const obj3 ={...obj1,...obj2};
// console.log(obj3);


const users =[
    {
        id:123,
        name:"jhon"
    }
]

// console.log(users[0].name);

console.log(instaUser);

console.log(Object.keys(instaUser)); // ["id","name","loggedIn"]
console.log(Object.values(instaUser)); //["123abc","jhon",true]
console.log(Object.entries(instaUser)); //[["id","123abc"],["name","jhon"],["loggedIn",true]]

console.log(instaUser.hasOwnProperty("id"));// true


const course ={
    coursename : "javascript",
    price :1000,
    courseInstructor : "Hithesh"
};

// course.courseInstructor

const {courseInstructor: instructor} = course;
console.log(instructor);



// JSON 
// {
//     "name" : "srujan",
//     "age":30
// }

[
    {},
    {},
    {}
]