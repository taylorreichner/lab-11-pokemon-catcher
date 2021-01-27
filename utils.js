import pokemon from './data.js';
import { incrementSeen, incrementCaught } from './localStorageUtils.js';

let numberOfTurns = 0;

export function getRandomPokemon() {
    const randomIndex = Math.floor(Math.random() * pokemon.length);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
 
}

export function setThreePokemon() { 
    numberOfTurns++;
    let pokeOne = getRandomPokemon();
    let pokeTwo = getRandomPokemon();
    let pokeThree = getRandomPokemon();

    while (pokeOne._id === pokeTwo._id || pokeOne._id === pokeThree._id || pokeTwo._id === pokeThree._id) {
        pokeOne = getRandomPokemon();
        pokeTwo = getRandomPokemon();
        pokeThree = getRandomPokemon();  
    }

    const img1 = renderPokeImage(pokeOne);
    const img2 = renderPokeImage(pokeTwo);
    const img3 = renderPokeImage(pokeThree);

    incrementSeen(pokeOne._id);
    incrementSeen(pokeTwo._id);
    incrementSeen(pokeThree._id);

    const div = document.getElementById('pokemon');

    div.textContent = '';

    div.append(img1, img2, img3);
}

export function renderPokeImage(pokemonItem) {
    const image = document.createElement('img');

    image.src = pokemonItem.url_image;

    image.classList.add('poke-img');
    image.addEventListener('click', () => {
        incrementCaught(pokemonItem._id);

        if (numberOfTurns < 10) {
            setThreePokemon();
        } else {
            window.location = 'results';
        }
    });

    return image;
}





