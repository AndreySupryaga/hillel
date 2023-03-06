'use strict';

/*
    {
        author: string,
        time: string,
        text: string
     }
 */

fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

const messageContainer = document.querySelector('.messages-container');
const messageTpl = document.querySelector('.message-template');

function renderData(data) {
    const fragment = new DocumentFragment();
    data.forEach(item => {
        const el = messageTpl.content.cloneNode(true);
        el.querySelector('.author').innerText = item.author;
        el.querySelector('.time').innerText = item.time;
        el.querySelector('.text').innerText = item.text;
        fragment.append(el);
    })
    messageContainer.append(fragment);

}
