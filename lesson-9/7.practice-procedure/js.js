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

function renderData(data) {
    for (const item of data) {
        const el = document.createElement('div');
        el.classList.add('message');
        el.innerHTML = item.text;
        messageContainer.append(el);
    }
}
