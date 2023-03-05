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
    const fragment = new DocumentFragment();

    for (const item of data) {
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

            fragment.append(el);
        }
    }
    messageContainer.append(fragment);
}
