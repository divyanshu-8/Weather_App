const apiKey = "acc3161714ef4915b39752d9c57549a3";
let city = "";
let displayTemp = document.querySelector(".temp");
let displayCity = document.querySelector(".city");
let displayWind = document.querySelector(".wind");
let displayHumidity = document.querySelector(".humidity");
let displayImg = document.querySelector(".weather-icon");
let btn = document.querySelector("button");
let weather = document.querySelector(".weather");
let error = document.querySelector(".error");
btn.addEventListener('click', ()=> {
    let inp = document.querySelector("input");
    city = inp.value;
    inp.value = "";
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
        let desc = res.data.weather[0].main;
        console.log(desc);
        if(desc == "Clear") {
            displayImg.src = "assets/clear.png";
        }else if(desc == "Clouds") {
            displayImg.src = "assets/clouds.png"
        }else if(desc == "Drizzle") {
            displayImg.src = "assets/drizzle.png"
        }else if(desc == "Humidity") {
            displayImg.src = "assets/humidity.png"
        }else if(desc == "Mist"){
            displayImg.src = "assets/mist.png"
        }else if(desc == "Rain"){
            displayImg.src = "assets/rain.png"
        }else if(desc == "Snow"){
            displayImg.src = "assets/snow.png"
        }else if(desc == "Wind"){
            displayImg.src = "assets/wind.png"
        }
        weather.style.display = "block";
    }catch(err) {
        error.style.display = "block";
        weather.style.display = "none";
    }
    
    
    
}
