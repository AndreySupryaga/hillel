'use strict';

/*
    {
        name: string,
        message: string,
        registered: string
     }
 */
fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

const tweetsContainer = document.querySelector('.messages-container');
function renderData(data) {
    // data = Array(100000).fill( {
    //     "name": "Coleen Coffey",
    //     "message": "fugiat enim ad aute magna aute quis incididunt consectetur tempor culpa elit sint exercitation fugiat",
    //     "registered": "2017-10-23"
    // });
    for (const item of data) {
        const el = document.createElement('div');
        el.classList.add('message');
        el.innerHTML = item.message;
        tweetsContainer.append(el);
    }
}
