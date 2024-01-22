import axios from "axios";

// UNSPLASH BACKGROUND
function getRandomImage() {
    const API_URL = 'https://api.unsplash.com/photos/random';
    const UNSPLASH_API_KEY = import.meta.env.VITE_UNSPLASH_API_KEY;

    const getImage = async () => {
      try {
        const response = await axios.get(`${API_URL}?query=bright+gradient&orientation=landscape&client_id=${UNSPLASH_API_KEY}`);
        console.log('Random Image:', response.data);
        updateImageOnPage(response.data);
      } catch (error) {
        console.error('Error fetching a random image:', error);
      }
    };

    getImage();
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

document.querySelector('.bg-button').addEventListener('click', getRandomImage);
// Call the function to fetch a random image
getRandomImage();