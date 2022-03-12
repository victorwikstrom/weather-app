const WEATHER_KEY = "fd06a8d6a2c6e3e87826c93258160dbd";
const WHOIS_KEY = "at_uYXExlLI9kf5o1Jft3WAIZxQmWd4h";

export const getWeather = async (location) => {
    try {
        const response = await fetch(`http://api.weatherstack.com/current?access_key=${WEATHER_KEY}&query=${location}`)
        return await response.json();
    } catch (error) {
        console.error(error)
        return "Couldn't fetch weather data"
    }
}

export const getLocation = async () => {
    try {
        const response = await fetch(`https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=${WHOIS_KEY}`);
        const result = await response.json();
        return result.location.city;
    } catch (error) {
        console.error(error)
        return "Couldn't fetch location data"
    }
}


