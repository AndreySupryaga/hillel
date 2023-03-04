'use strict';

const msg = document.querySelector('.message');
msg.classList.add('new');
msg.classList.remove('highlighter');
msg.classList.toggle('active');
msg.classList.replace('unread', 'read');
