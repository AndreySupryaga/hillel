'use strict';

/*
    {
        author: string,
        message: string,
        time: string
     }
 */
fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

const tweetsContainer = document.querySelector('.messages-container');

function renderData(data) {
    for (const item of data) {
        const el = document.createElement('div');
        el.classList.add('message');
        el.innerHTML = item.message;
        tweetsContainer.append(el);
    }
}
