const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

function createArrays(data) {
    return data.reduce((acc, {name, age}) => {
        acc.ages.push(age);
        acc.names.push(name);
        return acc;
    }, {ages: [], names:[]})
}

let {names, ages} = createArrays(people);

console.log(names);
console.log(ages);

const obj = {
    name: "Alice",
    age: 25
};

console.log(Object.entries(obj));

const res = Object.entries(obj).reduce((acc, [key, value]) => {
    acc[key] = value;
    return acc;
}, {})

console.log(res);

