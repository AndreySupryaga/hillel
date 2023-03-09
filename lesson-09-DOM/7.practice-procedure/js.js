'use strict';

/*
    {
        author: string,
        time: string,
        text: string
     }
 */
// `<div class="message">
//     <span class="author">{author}</span>
//     <span class="time">{time}</span>
//     <span class="text">{message}</span>
// </div>`;

fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

const messageContainer = document.querySelector('.messages-container');

function renderData(data) {
    for (const item of data) {
        const el = document.createElement('div');
        el.classList.add('message');

        const author = document.createElement('span');
        author.classList.add('author');
        author.innerHTML = item.author;
        el.append(author);

        const time = document.createElement('span');
        time.classList.add('time');
        time.innerHTML = item.time;
        el.append(time);

        const text = document.createElement('span');
        text.classList.add('text');
        text.innerHTML = item.text;
        el.append(text);

        messageContainer.append(el);
    }
}
