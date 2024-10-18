# Not So Funny Jokes Generator

This is a simple web application that generates random dad jokes. The interface is designed to be fun and lighthearted, featuring a joke displayed on the page with the option to load a new joke by clicking a button. The project leverages the **Dad Jokes API** to fetch fresh jokes on demand.

## Features

- **Responsive design**: The application is mobile-friendly and adjusts well to different screen sizes.
- **Joke API integration**: The app uses the [Dad Jokes API](https://icanhazdadjoke.com/api) to fetch random jokes with each button click.
- **Interactive button**: A button labeled "Tell Me A Joke" triggers a new joke to be fetched and displayed.
- **Simple and fun UI**: Styled with a playful color scheme and engaging animations to keep the user experience entertaining.

## Project Structure

- **index.html**: Contains the basic structure of the web page, including the main container for the joke and the button to load a new joke.
- **style.css**: Provides the styling for the page, with a playful color palette and smooth button animations for a dynamic feel.
- **script.js**: Handles the logic for fetching jokes from the Dad Jokes API and updating the DOM with a new joke each time the button is pressed.

## How it works

1. The user loads the page, and a default joke is displayed.
2. The user clicks the "Tell Me A Joke" button, triggering a call to the Dad Jokes API.
3. A new joke is fetched and displayed in place of the old one.

## Technologies Used

- **HTML/CSS/JavaScript**: For the front-end structure, design, and interactivity.
- **Dad Jokes API**: The external API used to provide the jokes.
