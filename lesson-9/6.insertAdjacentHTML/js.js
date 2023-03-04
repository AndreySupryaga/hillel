'use strict';

const container = document.querySelector('.container');

const htmlString = `<div class="message">Message 1</div><div class="message">Message 2</div>`;

container.insertAdjacentHTML('beforeend', htmlString) // вставляє заданий HTML в залежності від значення параметру where:
// container.innerHTML = node;
