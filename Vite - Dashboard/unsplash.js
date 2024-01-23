import axios from "axios";

// UNSPLASH BACKGROUND
function getPromptedImage() {
    const userQuery = prompt("Enter your query for the image (e.g., 'nature', 'cityscape'):");
    const query = userQuery || 'gradient+background'; // Use 'light gradient' if no user input
    getImage(query);
}

function getImage(query) {
    const API_URL = 'https://api.unsplash.com/photos/random';
    const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

    const fetchImage = async () => {
        try {
            const response = await axios.get(`${API_URL}?query=${query}&orientation=landscape&client_id=${UNSPLASH_API_KEY}`);
            console.log('Image:', response.data);
            updateImageOnPage(response.data);
        } catch (error) {
            console.error('Error fetching image:', error);
        }
    };
    fetchImage();
}

function updateImageOnPage(unsplashData) {
    const container = document.querySelector('.container');
    if (unsplashData && unsplashData.urls && unsplashData.urls.regular) {
        container.style.backgroundImage = `url('${unsplashData.urls.regular}')`;
        container.style.backgroundSize = 'cover';
        container.style.backgroundPosition = 'center';
    } else {
        console.log('No image data available');
    }
}

document.querySelector('.prompt-button').addEventListener('click', getPromptedImage);

getImage('gradient+background');