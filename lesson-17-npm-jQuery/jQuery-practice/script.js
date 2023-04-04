'use strict';

const bodyEl = document.querySelector('body');

const btnEl = document.createElement('button');
btnEl.className = 'btn btn-primary js-selector';
btnEl.innerText = 'Hello world';
btnEl.setAttribute('type', 'button');
btnEl.addEventListener('click', (e) => {
    e.target.remove();
})

bodyEl.append(btnEl);

const alertTmpl = '<button type="button" class="btn btn-primary js-selector">Hello world $</button>';

$(alertTmpl).click(function () {
    $(this).hide(1000);
}).appendTo('body');
