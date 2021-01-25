import pokemon from './data.js';

export function getRandomPokemon() {
    const randomIndex = math.floor(math.random() * pokemon.lenth);

    return pokemon[randomIndex];
}

export function findByUnderscoreId(array, id) {
    for (let item of array) {
        if (item._id === id) return item;
    }
 
}