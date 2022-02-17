let loc = document.getElementById("location");
let tempicon = document.getElementById("temp-icon");
let tempvalue = document.getElementById("temp-value");
let climate = document.getElementById("climate");

let iconfile;
const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");


// const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Patna&appid=65b62f676811385e64264084b096dcb7';
// const key = '65b62f676811385e64264084b096dcb7';

// fetch(baseUrl).then((data) => { console.log('response', data) })




// console.log("this is live");

// window.addEventListener("load", () => {
//     let long;
//     let lat;
//     const proxy = "https://cors-anywhere.herokuapp.com/corsdemo/";

//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition((position) => {
//             long = position.coords.longitude;
//             lat = position.coords.latitude;

//             const api = `${proxy}api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=65b62f676811385e64264084b096dcb7`

//             fetch(api).then((response) => {
//                 return response.json();
//             })

//                 .then(data => {

//                     const { name } = data;
//                     const { feels_like } = data.main;
//                     const { id, main } = data.weather[0];

//                     loc.textContent = name;
//                     climate.textContent = main;
//                     tempvalue.textContent = Math.round(feels_like - 273);
//                     console.log(data);

//                 })
//         })
//     }
// })



searchButton.addEventListener('click', (e) => {
    e.preventDefault();

    getWeather(searchInput.value);
    searchInput.value = '';
});

const getWeather = async (city) => {

    try {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=65b62f676811385e64264084b096dcb7`,
            { mode: 'cors' }
        );

        const weatherData = await response.json();
        const { name } = weatherData;
        const { feels_like } = weatherData.main;
        const { id, main } = weatherData.weather[0];

        loc.textContent = name;
        climate.textContent = main;
        tempvalue.textContent = Math.round(feels_like - 273);
        if (id < 300 && id < 200) {
            tempicon.src = "thenderstom.svg";
        }
        else if (id < 400 && id > 300) {
            tempicon.src = "cloud.svg";
        }
        else if (id < 600 && id > 500) {
            tempicon.src = "rain.svg";
        }
        else if (id < 700 && id > 600) {
            tempicon.src = "cloud.svg";
        }
        else if (id < 800 && id > 700) {
            tempicon.src = "cloud-sun.svg";
        }
        else if (id == 800) {
            tempicon.src = "cloud-sun.svg";
        }

    }

    catch (error) {
        alert('City not found');
    }
};