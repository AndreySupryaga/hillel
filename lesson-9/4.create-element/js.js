'use strict';

const container = document.querySelector('.container');

const msg = document.createElement('div');
msg.classList.add('message');
msg.innerHTML = 'Hello world!';

container.append(msg);

const msg1 = msg.cloneNode(true);
msg1.innerHTML += ' 2'
container.append(msg1);
