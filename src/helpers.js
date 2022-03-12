import hot from "./assets/icons/hot.svg"
import medium from "./assets/icons/medium.svg"
import cold from "./assets/icons/cold.svg"
import sunny from "./assets/icons/sunny.svg"
import cloud from "./assets/icons/cloud.svg"
import partlyCloudy from "./assets/icons/partly-cloudy.svg"
import snow from "./assets/icons/snow.svg"
import rain from "./assets/icons/rain.svg"
import thunder from "./assets/icons/thunderstroms.svg"
import fog from "./assets/icons/foggy.svg"

export const getClientLocation = () => {
    const success = (pos) => {
        console.log(pos)
        return {
            lat: pos.coords.latitude,
            long: pos.coords.longitude,
        }
    }
    const error = (err) => {
        console.error(err)
    }

    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(success, error);
    }
    else {
        return "This feature is not supported by this browser.";
    }
}

export const getDate = () => {
    const date = new Date();
    const dateOpts = {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
    };
    return date.toLocaleDateString('en-US', dateOpts);
};

export const getTemperatureText = (temp) => {
    if (temp < 0) {
        return "It's cold as ### and";
    } else if (temp > 0 && temp <= 6) {
        return "It's freezing and"
    } else if (temp > 6 && temp <= 12) {
        return "It's neither warm nor cold and"
    } else if (temp > 12 && temp <= 18) {
        return "It's quite nice and"
    } else if (temp > 18 && temp <= 24) {
        return "Go outside! Its nice and"
    } else if (temp > 24 && temp <= 32) {
        return "Alright, perfect conditions and"
    } else if (temp > 32) {
        return "Everyone's probably melting and it's"
    } else {
        return "Not quite sure but it's"
    }
}

export const getThermometerIcon = (temp) => {
    if (temp < 5) {
        return cold
    } else if (temp > 5 && temp <= 20) {
        return medium
    } else if (temp > 20) {
        return hot
    }
}

export const getWeatherIcon = (desc) => {
    if (desc) {
        const d = desc.toLowerCase()
        if (d.includes("sunny")) {
            return sunny
        } else if (d.includes("overcast")) {
            return cloud
        } else if (d.includes("partly cloudy")) {
            return partlyCloudy
        } else if (d.includes("snow")) {
            return snow
        } else if (d.includes("fog")) {
            return fog
        } else if (d.includes("rain")) {
            return rain
        } else if (d.includes("thunder")) {
            return thunder
        }
    } else return null

}