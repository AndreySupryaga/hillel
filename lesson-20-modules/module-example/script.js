import * as cal from './data.js';
import defaultFunction, {default as myFunc, sum} from './data.js';
import {sum as mathSum} from './math.js';

console.log(sum());
console.log(mathSum(1,3));

console.log(cal.a);
console.log(cal.b);
console.log(cal.sum());
console.log(cal.multiply());
console.log(defaultFunction());
console.log(myFunc());
