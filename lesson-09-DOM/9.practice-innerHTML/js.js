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
    messageContainer.innerHTML = data.map(item =>
        `<div class="message">
            <span class="author">${item.author}</span>
            <span class="time">${item.time}</span>
            <span class="text">${item.text}</span>
        </div>`
    ).join('');
}
