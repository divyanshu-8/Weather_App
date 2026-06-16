const apiKey = "acc3161714ef4915b39752d9c57549a3";
let city = "Patna";
let temp = 0;
let humidity = 0;
let windSpeed = 0;
let displayTemp = document.querySelector(".temp");
let displayCity = document.querySelector(".city");
let inp = document.querySelector("input");
let btn = document.querySelector("button");
let displayWind = document.querySelector(".wind");
let displayHumidity = document.querySelector(".humidity");
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;


btn.addEventListener('click', ()=> {

});
async function fetchData() {
    let res = await axios.get(apiUrl);
    console.log(res.data);
    temp = res.data.main.temp;
    console.log(res.data.wind.speed);
    
    
}

fetchData();