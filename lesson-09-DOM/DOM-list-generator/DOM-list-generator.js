'use strict';

let data = [
    {
        text: 'Item 1',
        children: [
            {text: 'Item 1.1'},
            {text: 'Item 1.2',}
        ]
    },
    {
        text: 'Item 2',
        children: [
            {text: 'Item 2.1'},
            {text: 'Item 2.2'},
            {
                text: 'Item 2.3',
                children: [
                    {text: 'Item 2.3.1'},
                    {text: 'Item 2.3.2',}
                ]
            }
        ]
    },
    {text: 'Item 3'}
];

const ul = generateUL(data);
document.body.append(ul);

function generateUL(data) {
    let ul = document.createElement('ul');

    data.forEach(function (item) {
        let li = document.createElement('li');
        li.innerText = item.text;

        if (item.children?.length > 0) {
            li.append(generateUL(item.children));
        }

        ul.append(li);
    });

    return ul;
}
