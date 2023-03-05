'use strict';

/*
    {
        name: string,
        message: string,
        time: string
     }
 */
fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

const tweetsContainer = document.querySelector('.messages-container');

function renderData(data) {
    tweetsContainer.innerHTML = data.map(item =>
        `<div class="message">${item.message}</div>`
    ).join('');
}
