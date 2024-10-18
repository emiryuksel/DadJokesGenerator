const jokeButton = document.getElementById('jokeButton');
const joke = document.getElementById('joke');

const apiKey = 'cv3T00O+wn115NrzHDtFyA==W2KjdjWl2e2N8u2i';
const apiURL = 'https://api.api-ninjas.com/v1/dadjokes';

const options = {
    method:'GET',
    headers:{
        'X-Api-Key' :apiKey,
    },
};

async function getJoke() {

    try {
        joke.textContent = 'Updating...'
        jokeButton.textContent = 'Loading...'
        jokeButton.disabled = true;
        
        const response = await fetch(apiURL, options);
        const data = await response.json();
    
        jokeButton.disabled = false;
        jokeButton.textContent = 'tell me a joke';
        joke.textContent = data[0].joke;
    } catch (error) {
        joke.textContent='Try again later'
        jokeButton.disabled = false;
        jokeButton.textContent = 'tell me a joke';
    }

}

jokeButton.addEventListener('click', getJoke);