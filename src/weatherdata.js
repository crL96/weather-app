async function getWeatherData(location) {
    try {
        const response = await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=metric&key=HM5U6KZ9J6SDFWKQU9C4GDQLQ&contentType=json`, {mode: 'cors'})
        const object = await response.json();
        const filteredData = filterAPIData(object);
        return filteredData;
    }
    catch {
        alert("Could not find location");
        throw Error("Could not find location");
    }
}

async function filterAPIData(apiData) {

    const location = apiData.resolvedAddress;

    const currentConditions = {}
    currentConditions.temp = apiData.currentConditions.temp;
    currentConditions.condition = apiData.currentConditions.conditions;
    currentConditions.time = apiData.currentConditions.datetime;
    currentConditions.precip = apiData.currentConditions.precip;

    const today = {}
    today.temp = apiData.days[0].temp;
    today.feelsLike = apiData.days[0].feelslike;
    today.tempMin = apiData.days[0].tempmin;
    today.tempMax = apiData.days[0].tempmax;
    today.desc = apiData.days[0].description;
    today.precip = apiData.days[0].precip;

    return {location, currentConditions, today};
}

export { getWeatherData };