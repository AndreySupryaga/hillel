fetch('https://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19')
    .then((data) => data.json)
    .then(console.log);

function handleResponse(data) {
    const img = document.createElement('img');
    img.setAttribute('src', data.avatar_url);
    document.body.prepend(img);
}
