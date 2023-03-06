const element = document.getElementById('first');

element.addEventListener('click', function (event) {
    event.stopPropagation();
});
