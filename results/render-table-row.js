import pokemon from '../data.js';
import { findByUnderscoreId } from '../utils.js';

export function renderTableRow(poke) {
    const pokeName = findByUnderscoreId(pokemon, poke._id);
    const tr = document.createElement('tr');
    const nameTd = document.createElement('td');
    nameTd.textContent = pokeName.pokemon;

    const seenTd = document.createElement('td');
    seenTd.textContent = poke.seen;

    const caughtTd = document.createElement('td');
    caughtTd.textContent = poke.caught;

    tr.append(nameTd, seenTd, caughtTd);
    return tr;
}


