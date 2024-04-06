const marvelHero =['hulk','thor','captain america','iron man','spider-man'];
const actor = ['amir khan','tony stark', 'bruce banners'];

// actor.push(marvelHero);
// console.log(actor);

const allHero=actor.concat(marvelHero); // concat is a method of array which joins two arrays and returns the new joined array.

const new_all_heroes = [...marvelHero,...actor]// spread operator will copy all elements from an array to another array.

const anotherArr = [1,2,3,[4,5,6,4],4,7,[5,9,8,[5,2]]];

const real_another_arr = anotherArr.flat(Infinity);// flat is a method of array which joins two arrays and returns the new joined array.
// console.log(real_another_arr);


console.log(Array.isArray("srujan"));// this will return false as it checks if an element is an instance of Array, not whether its an array or not.

console.log(Array.from("srujan"));// this will return a new array containing the same elements as the string argument.


console.log(Array.from({name : "srujan"}));//intresting it will give empty

let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3,50));//it will give array with values



