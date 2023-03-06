'use strict';

const element = document.querySelector('.target');

const previousSibling = element.previousSibling;
console.log('previousSibling', previousSibling);

const parentElement = element.parentElement;
console.log('parentElement', parentElement);

const previousElementSibling = element.previousElementSibling;
console.log('previousElementSibling', previousElementSibling);

const nextElementSibling = element.nextElementSibling;
console.log('nextElementSibling', nextElementSibling);

const firstElementChild = element.firstElementChild;
console.log('firstElementChild', firstElementChild);

const lastElementChild = element.lastElementChild;
console.log('lastElementChild', lastElementChild);

const children = element.children;
console.log('children', children);

const closest = element.closest('body');
console.log('closest', closest);

