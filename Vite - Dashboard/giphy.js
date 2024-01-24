import axios from "axios";

function getGiphy() {
    const API_URL = 'https://api.giphy.com/v1/gifs/random'
    const API_KEY = import.meta.env.VITE_GIPHY_API_KEY

    const fetchGif = async () => {
        try {
            const response = await axios.get(`${API_URL}?api_key=${API_KEY}`);
            const gifUrl = response.data.data.images.original.url; // Using the direct URL to the GIF
            
            document.getElementById('gif').innerHTML = `
            <img src="${gifUrl}" alt="Random GIF" class="gif">
            `;
        } catch (error) {
            console.error(error);
        }
    };
    fetchGif()
}

document.querySelector('.gif-btn').addEventListener('click', getGiphy);

getGiphy();