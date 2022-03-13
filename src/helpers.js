import hot from "./assets/icons/hot.svg"
import medium from "./assets/icons/medium.svg"
import cold from "./assets/icons/cold.svg"

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
        return "It's quite cold and"
    } else if (temp > 6 && temp <= 12) {
        return "It's neither warm nor cold and"
    } else if (temp > 12 && temp <= 18) {
        return "It's quite nice and"
    } else if (temp > 18 && temp <= 24) {
        return "Go outside! It's lagom warm and"
    } else if (temp > 24 && temp <= 32) {
        return "Alright, real high summer temperatures and"
    } else if (temp > 32) {
        return "Everyone's melting and it's"
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
            return "☀️"
        } else if (d.includes("overcast")) {
            return "☁️"
        } else if (d.includes("clear")) {
            return "🌖"
        } else if (d.includes("partly cloudy")) {
            return "🌤"
        } else if (d.includes("snow")) {
            return "🌨"
        } else if (d.includes("fog")) {
            return "😶‍🌫️"
        } else if (d.includes("rain")) {
            return "🌧"
        } else if (d.includes("thunder")) {
            return "🌩"
        }
    } else return "😶‍🌫️" // This should be done in a better way... 

}