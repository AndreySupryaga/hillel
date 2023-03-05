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
    const fragment = new DocumentFragment();

    for (const item of data) {
        const el = document.createElement('div');
        el.classList.add('message');
        el.innerHTML = item.message;
        fragment.append(el);
    }
    tweetsContainer.append(fragment);
}
