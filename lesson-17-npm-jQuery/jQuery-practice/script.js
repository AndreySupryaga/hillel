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

$(alertTmpl)
    .on('click', function () {
        $(this).fadeOut(2000, () => {
            alert('Ok')
        });
    })
    .appendTo('body');
