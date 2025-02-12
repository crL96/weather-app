import "./style.css"
import { getWeatherData } from "./weatherdata.js";
import { renderCurrentWeather, renderTodaysWeather } from "./UI.js";

getWeatherData("Stockholm").then((r) => {
    console.log(r);
    renderCurrentWeather(r);
    renderTodaysWeather(r);
});