'use strict';

/*
    {
        author: string,
        time: string,
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

const messageContainer = document.querySelector('.messages-container');

function renderData(data) {
    messageContainer.insertAdjacentHTML(
        'beforeend',
        data.map(item =>
            messageTpl
                .replace('{author}', item.author)
                .replace('{time}', item.time)
                .replace('{message}', item.text)
        ).join('')
    );
}
