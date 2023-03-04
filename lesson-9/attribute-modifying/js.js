'use strict';

const msg = document.querySelector('.message');
msg.setAttribute('id', 'new-id')
msg.removeAttribute('height')

// Щоб працював boolean аттрибут можна додати любе значення

const checkbox = document.querySelector('.checkbox');
checkbox.setAttribute('checked', '');
checkbox.removeAttribute('disabled');

