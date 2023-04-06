fetch('https://6429c27cb11efeb7598d765d.mockapi.io/api/v1/users')
    .then(response => response.json())
    .then(handleResponse);

function handleResponse(data) {
    const img = document.createElement('img');
    img.setAttribute('src', data.avatar_url);
    document.body.prepend(img);
}
