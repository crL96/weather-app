import { getWeatherData } from "./weatherdata.js";

// Update with new location when user enters input
const searchForm = document.querySelector("#searchForm");
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const formdata = new FormData(searchForm);
    const location = Object.fromEntries(formdata).location;
    getWeatherData(location).then(r => {
        console.log(r);
        renderCurrentWeather(r);
        renderTodaysWeather(r);
    });
    searchForm.reset();
});


function renderCurrentWeather(weatherData) {
        const container = document.querySelector("#currentWeatherContainer");
        container.replaceChildren();
    
        const header = document.createElement("h3");
        header.textContent = "Current Weather";
        container.appendChild(header);
    
        const condition = document.createElement("p");
        condition.textContent = weatherData.currentConditions.condition;
        container.appendChild(condition);
    
        const temp = document.createElement("p");
        temp.textContent = "Temperature: " + weatherData.currentConditions.temp + "°C";
        container.appendChild(temp);
    
        const precip = document.createElement("p");
        precip.textContent = "Precipitation: " + weatherData.currentConditions.precip + "mm";
        container.appendChild(precip);
    
        const location = document.createElement("p");
        location.textContent = weatherData.location;
        container.appendChild(location);
    
        const time = document.createElement("p");
        time.textContent = "Last Updated: " + weatherData.currentConditions.time;
        container.appendChild(time);
    }

function renderTodaysWeather(weatherData) {
    const container = document.querySelector("#todaysWeatherContainer");
    container.replaceChildren();
    
    const header = document.createElement("h3");
    header.textContent = "Today's Forecast";
    container.appendChild(header);
    
    const location = document.createElement("h4");
    location.textContent = weatherData.location;
    container.appendChild(location);

    const gridContainer = document.createElement("div");
    gridContainer.setAttribute("id", "gridContainer");
    container.appendChild(gridContainer);
    
    const desc = document.createElement("p");
    desc.textContent = weatherData.today.desc;
    gridContainer.appendChild(desc);
    
    const temp = document.createElement("p");
    temp.textContent = "Temperature: " + weatherData.today.temp + "°C";
    gridContainer.appendChild(temp);
    
    const precip = document.createElement("p");
    precip.textContent = "Precipitation: " + weatherData.today.precip + "mm";
    gridContainer.appendChild(precip);
    
    const feelsLike = document.createElement("p");
    feelsLike.textContent = "Feels Like: " + weatherData.today.feelsLike + "°C";
    gridContainer.appendChild(feelsLike);
    
    const tempMin = document.createElement("p");
    tempMin.textContent = "Minimum Temperature: " + weatherData.today.tempMin + "°C";
    gridContainer.appendChild(tempMin);
    
    const tempMax = document.createElement("p");
    tempMax.textContent = "Maximum Temperature: " + weatherData.today.tempMax + "°C";
    gridContainer.appendChild(tempMax);
    
    
    
}

export { renderCurrentWeather, renderTodaysWeather };