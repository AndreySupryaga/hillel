'use strict';

fetch('../mock-data.json')
    .then(response => response.json())
    .then(renderData);

function renderData(data) {
    console.log(data);
}
