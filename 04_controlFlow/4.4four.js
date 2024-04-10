// const coding = ["js","c","c++","python"];

// const values = coding.forEach((item) => {
    // console.log(item);
//     return item;
// })


// console.log(values);

const nums =[ 1,2,3,4,5,6,7,8,9,10];

// const newnums =nums.filter((num) =>{
//     return num > 5
// })

const newnum =[]
nums.forEach((num) =>{
    if(num>4){
        newnum.push(num);
    }
});


console.log(newnum);

