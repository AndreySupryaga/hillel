const obj = {
    name: 'Bob',
    age: 35,
};

const entries = Object.entries(obj);
const map = new Map(entries);
const objFromMap = Object.fromEntries([...map]);
console.log(objFromMap);

const f = () => {};

const map1 = new Map();

map1.set(true, 1);
map1.set(f, 'Function value');

console.log(map1.get(true));
console.log(map1.get(f));
