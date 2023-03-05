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

const messageTpl = `<div class="message">
            <span class="author">{author}</span>
            <span class="time">{time}</span>
            <span class="text">{message}</span>
        </div>`;

const tweetsContainer = document.querySelector('.messages-container');

function renderData(data) {
    tweetsContainer.innerHTML = data.map(item =>
        messageTpl
            .replace('{author}', item.author)
            .replace('{time}', item.time)
            .replace('{message}', item.message)
    ).join('');
}
