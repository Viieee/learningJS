// buttons
const addMovieButton = document.getElementById('add-movie-btn');
const filterMovieButton = document.getElementById('search-btn');

let movies = [];

function addMovieHandler(){
// user inputs
const title = document.getElementById('title').value;
const extraName = document.getElementById('extra-name').value;
const extraValue = document.getElementById('extra-value').value;
    if(title.trim() === ''||
    extraName.trim() === '' ||
    extraValue.trim() === ''){
        return;
    }
    const newMovie ={
        info : {
            title, // if the key name and value name is the same, you can just write it once
            [extraName]: extraValue
        }, 
        id: Math.random()
    }
    movies.push(newMovie)
    console.log(newMovie, movies)
}

addMovieButton.addEventListener('click',addMovieHandler);