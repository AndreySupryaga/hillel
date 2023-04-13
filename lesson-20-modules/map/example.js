const obj = {
    name: 'Bob',
    age: 35,
};

const entries = Object.entries(obj);
const map = new Map(entries);
const objFromMap = Object.fromEntries([...map]);
console.log(objFromMap);
