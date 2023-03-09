'use strict';


/*
    {
        author: string,
        time: string,
        text: string
     }
 */

const messageTpl = `<div class="message">
            <span class="author">{author}</span>
            <span class="time">{time}</span>
            <span class="text">{text}</span>
        </div>`;

const data = [];

fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);
    // .then(renderDataWithParser.bind(null, messageTpl));

const messageContainer = document.querySelector('.messages-container');

function renderData(data) {
    messageContainer.innerHTML = data.map(item =>
        messageTpl
            .replaceAll('{author}', item.author)
            .replaceAll('{time}', item.time)
            .replaceAll('{text}', item.text)
    ).join('');
}

function renderDataWithParser(tmpl, data) {
    messageContainer.innerHTML = data.map(getParsedHtml.bind(null, tmpl)).join('');
    // messageContainer.innerHTML = data.map((item) => {
    //     return getParsedHtml(tmpl, item);
    // }).join('');
}

function getParsedHtml(tmpl, data) {
    return Object.entries(data).reduce((acc, curr) => {
        return acc.replaceAll(`{${curr[0]}}`, curr[1]);
    }, tmpl);
}
