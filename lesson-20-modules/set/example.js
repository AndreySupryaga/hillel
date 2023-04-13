const set = new Set();

const o = {name: 'Bob', id: 12};
const o1 = o;
const f = () => {};
set.add(1);
set.add(2);
set.add('2');
set.add(o);
set.add(o);
set.add(o1);
set.add(f);
set.add(false);
console.log(set.has(false));
console.log(set);
set.delete(f);
console.log(set);

console.log(set.values());
console.log([...set.entries()]);

console.log([...set].find(({id}) => id === 12).name);
