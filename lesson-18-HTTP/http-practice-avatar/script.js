fetch('https://api.github.com/users/AndreySupryaga')
    .then((data) => data.json())
    .then(handleResponse);

function handleResponse(data) {
    console.log(data);
    const img = document.createElement('img');
    img.setAttribute('src', data.avatar_url);
    document.body.prepend(img);
}
