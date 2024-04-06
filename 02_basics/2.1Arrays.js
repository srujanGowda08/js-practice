//arr

const arr = [0,5,9,8];

const heroes = ['Batman', 'Superman'];

const arr2 = new Array(1,2,2,3,4);

//array Methods

arr.push(7);//add element to the end of array
arr.pop(); //remove last element from array


arr.unshift(0);//adds new elements at beginning of array and returns length of array after adding new elements
arr.shift();//removes first element from the beginning of array and returns removed element

console.log(arr.includes(5));//returns true if value is found in array, otherwise it returns false
console.log(arr.indexOf(5));//returns index of first occurrence of a specified value in an array. Otherwise, -1 is returned to indicate the specified value was not found.

const newarr =arr.join();//creates and returns a string composed of all elements from the given array.

console.log(typeof newarr);
console.log(arr);


//slice , splice

console.log("A",arr);

const mynew = arr .slice(1,3);//creates a new array with the same data as the given array but with only some of its elements.

console.log(mynew);
console.log("B",arr);

const mynew2 = arr .splice(1,3);//removes elements from array and returns removed element as an array.
console.log("C",arr);
