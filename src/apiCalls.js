const KEY = "6a2eb3edc3bb4031a2c110013221303";

export const getWeatherData = async () => {
    try {
        // Change query 'auto:ip' to any other location too see weather in other places
        const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=${KEY}&q=auto:ip`);
        const result = await response.json();
        return result;
    } catch (error) {
        console.error(error)
        return "Couldn't fetch location data"
    }
}


