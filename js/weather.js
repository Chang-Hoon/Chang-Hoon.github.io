const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "f87b60840bc5728cab0792a1d2093f68";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(position);
    console.log('You live in', lat, lon);

    // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            console.dir(data);
            console.log(data.name, data.weather[0].description, data.main.temp);
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].description} / ${data.main.temp} °C`;
        });

}

function onGeoError() {

}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);