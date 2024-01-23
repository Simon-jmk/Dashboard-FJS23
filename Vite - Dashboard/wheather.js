import axios from "axios";

document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('getWeatherButton');
    button.addEventListener('click', getWeather);
});

function getWeather() {
    const API_URL = 'https://api.openweathermap.org/data/2.5/weather';
    const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
    
    const city = prompt("Please enter the city name:");

    if (!city) {
        alert("No city entered. Please try again.");
        return;
    }

    const fetchWeather = async () => {
        try {
            const response = await axios.get(`${API_URL}?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`);
            console.log('Weather:', response.data); 
            const temperature = response.data.main.temp;
            const tempMax = response.data.main.temp_max;
            const tempMin = response.data.main.temp_min;
            const feelsLike = response.data.main.feels_like;
            const humidity = response.data.main.humidity;
            const pressure = response.data.main.pressure;
            const windSpeed = response.data.wind.speed;

            document.getElementById('weatherInfo').innerHTML = `
                <h2 class="text">${city}: </h2>
                <h4 class="text">Temp: ${temperature}°C</h4>
                <h4 class="text">High: ${tempMax}°C</h4>
                <h4 class="text">Low: ${tempMin}°C</h4>
                <h4 class="text">Feels like: ${feelsLike}°C</h4>
                <h4 class="text">Humidity: ${humidity}%</h4>
                <h4 class="text">Pressure: ${pressure} hPa</h4>
                <h4 class="text">Wind Speed: ${windSpeed} m/s</h4>
            `;
        } catch (error) {
            console.error('Error fetching weather:', error);
            document.getElementById('weatherInfo').innerText = `Failed to fetch weather data for ${city}`;
        }
    };
    fetchWeather();
}