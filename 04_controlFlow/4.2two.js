//for of
const arr = [ 2,3,4,5,6];

for (const num of arr) {
    console.log(num);
}


//Maps

const map = new Map();
map.set('IN',"India");
map.set('fr',"France");

//console.log(map);

for (const [key ,value] of map) {
    console.log(key ,value);
}