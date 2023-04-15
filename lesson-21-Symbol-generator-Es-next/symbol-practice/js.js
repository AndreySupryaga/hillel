'use strict';
import {idProperty} from "./common-props.js";

const user = {
    [idProperty]: 1,
    login: `Richard`,
    password: `abcdefg`
};

console.log(Object.keys(user));
console.log(user[idProperty]);
