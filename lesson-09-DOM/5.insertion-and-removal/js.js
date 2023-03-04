'use strict';

const container = document.querySelector('.container');

const node = document.createElement('div') || 'Hello world!';
node.classList.add('message');
node.innerHTML = 'Hello world!';

container.append(node);       // вставляє в node, в кінець,
// container.prepend(node);      // вставляє в node, на початку,
// container.before(node);       // вставляє прямо перед node,
// container.after(node);        // вставляє відразу після node,
// container.replaceWith(node);  // замінює container.

// setTimeout(() => node.remove(), 2000);
