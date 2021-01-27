import { makeNameArray, makeSeenArray, makeCaughtArray } from './munchUtils.js';
import { getPokeStats } from '../localStorageUtils.js';
import { renderTableRow } from './render-table-row.js';

const resetButton = document.getElementById('reset-button');

const table = document.querySelector('table');

const pokeStats = getPokeStats();

for (let item of pokeStats) {
    const tableRow = renderTableRow(item);
    table.append(tableRow)

}

resetButton.addEventListener('click', () =>{
    
    window.location.replace('../index.html');
    localStorage.clear()
});



var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, { 
    type: 'bar',
    data: {
        labels: makeNameArray(pokeStats),
        datasets: [{
        label: 'Caught pokemon',
            data: makeCaughtArray(pokeStats),
            backgroundColor: 'red',
            borderColor: 'pink',
            borderWidth: 1
        },
        {
        label: 'Seen pokemon',
        data: makeSeenArray(pokeStats),
        backgroundColor: 'green',
        borderColor: 'lightgreen',
        
        borderWidth: 1
    }
    ]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                    
                }
            }]
        }
    }
});


