const apiKey = "acc3161714ef4915b39752d9c57549a3";
let city = "";
let displayTemp = document.querySelector(".temp");
let displayCity = document.querySelector(".city");
let displayWind = document.querySelector(".wind");
let displayHumidity = document.querySelector(".humidity");
let displayImg = document.querySelector(".weather-icon");
let btn = document.querySelector("button");


btn.addEventListener('click', ()=> {
    let inp = document.querySelector("input");
    city = inp.value;
    fetchData();
});

async function fetchData() {
    try{
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        let res = await axios.get(apiUrl);
        console.log(res.data);
        displayCity.innerText = res.data.name;
        let tempr = Math.round(res.data.main.temp);
        displayTemp.innerText =`${tempr}°c`;
        displayWind.innerText = `${res.data.wind.speed} km/h`;
        displayHumidity.innerText = `${res.data.main.humidity}%`;
        let desc = res.data.weather[0].description;
        console.log(desc);
        if(desc == "clear Sky") {
            displayImg.outerHTML = "<img src=\"assets/clear.png\" class=\"weather-icon\">"
;        }
        
    }catch(err) {
        console.log("Error:", err);
    }
    
    
    
}
