import axios from "axios";

document.addEventListener("DOMContentLoaded", async () => {
  try {
    let city;
    const savedCity = localStorage.getItem("savedCity");
    if (savedCity) {
      city = savedCity;
    } else {
      const location = await getUserLocation();
      city = await getCityFromCoordinates(
        location.latitude,
        location.longitude
      );
    }

    getWeather(city);
  } catch (error) {
    console.error("Error:", error);
  }

  const button = document.getElementById("getWeatherButton");
  button.addEventListener("click", async () => {
    const city = prompt("Please enter the city name:");
    if (city) {
      localStorage.setItem("savedCity", city);
      await getWeather(city);
    }
  });
});

async function getUserLocation() {
  return new Promise((resolve, reject) => {
    if (!navigator.geolocation) {
      reject("Geolocation is not supported by your browser");
    } else {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          resolve({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
        },
        () => {
          reject("Unable to retrieve your location");
        }
      );
    }
  });
}

async function getCityFromCoordinates(latitude, longitude) {
  const OPEN_CAGE_API_KEY = import.meta.env.VITE_OPEN_CAGE_API_KEY;
  const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=${OPEN_CAGE_API_KEY}`;

  try {
    const response = await axios.get(url);
    const location = response.data?.results?.[0]?.components;
    return location ? location.city : null;
  } catch (error) {
    console.error("Error fetching city from coordinates:", error);
    return null; 
  }
}

async function getWeather(city) {
  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const OPEN_WEATHER_API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

  if (!city) {
    alert("No city entered. Please try again.");
    return;
  }

  try {
    const response = await axios.get(
      `${API_URL}?q=${city}&units=metric&appid=${OPEN_WEATHER_API_KEY}`
    );
    let weatherCondition = response.data.weather[0].main;

    // Checks if an SVG file exists for the current weather condition. If not, default to using "Haze" as the weather condition.
    const conditionsForHaze = [
      "Mist",
      "Smoke",
      "Dust",
      "Fog",
      "Sand",
      "Ash",
      "Squall",
      "Tornado",
    ];

    if (conditionsForHaze.includes(weatherCondition)) {
      weatherCondition = "Haze";
    }

    const temperature = Math.round(response.data.main.temp);
    const tempMax = Math.round(response.data.main.temp_max);
    const tempMin = Math.round(response.data.main.temp_min);
    const feelsLike = Math.round(response.data.main.feels_like);
    const humidity = response.data.main.humidity;
    const pressure = response.data.main.pressure;
    const windSpeed = Math.round(response.data.wind.speed);
    const svgFilePath = `weather-svg/${weatherCondition}.svg`;

    document.getElementById("weatherInfo").innerHTML = `
      <div class="weather-svg-container">
        <img src="${svgFilePath}" alt="${weatherCondition}" class="weather-svg">
      </div>
      <h2 class="text">${city}:</h2>
      <h4 class="text">Temp: ${temperature}°C</h4>
      <h4 class="text">High: ${tempMax}°C</h4>
      <h4 class="text">Low: ${tempMin}°C</h4>
      <h4 class="text">Feels like: ${feelsLike}°C</h4>
      <h4 class="text">Humidity: ${humidity}%</h4>
      <h4 class="text">Pressure: ${pressure} hPa</h4>
      <h4 class="text">Wind Speed: ${windSpeed}m/s</h4>
    `;
  } catch (error) {
    console.error("Error fetching weather:", error);
    document.getElementById("weatherInfo").innerHTML = `
      <h2 class="text">Error</h2>
      <h2 class="text">Failed to fetch weather data for: <br> ${city}</h2>
    `;
  }
}