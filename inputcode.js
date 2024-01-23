<<<<<<< HEAD

let myChart;

function displayStatsChart(pokemonData) {
    const stats = pokemonData.stats;

    const labels = stats.map(stat => stat.name);
    const values = stats.map(stat => stat.base_stat);

    const ctx = document.getElementById('pokemonStatsChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: [{
                
                data: values,
                backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 93, 0, 0.8)', 'rgba(255, 208, 0, 0.8)', 
                'rgba(85, 133, 255, 0.8)', 'rgba(117, 227, 97, 0.8)', 'rgba(250, 85, 155, 0.8)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: false,
                    suggestedMin: 0,
                    suggestedMax: 120
                }
            },

                plugins: {
                    legend: {display: false },
                    title: {
                    display: true,
                    text: 'Pokemon Base Stat',
                    position: 'top',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
}

=======
>>>>>>> 7410dc78f00a259f4d6d7c43e8f6317fe972ddce
function ExtractPokemonData() {
    const inputElement = document.getElementById("pokemonIdInput");
    const userInput = inputElement.value;

    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${userInput}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const pokemonData = {
                name: data.name,
                id: data.id,
                height: data.height,
                weight: data.weight,
                stats: data.stats.map(stat => ({
                    name: stat.stat.name,
                    base_stat: stat.base_stat
                }))
            };
<<<<<<< HEAD

            
            // console.log(pokemonData);
            updateStatsChart(pokemonData);
        })
        .catch(error => console.error('Error fetching data:', error));
}

function updateStatsChart(pokemonData) {
    const stats = pokemonData.stats;

    const labels = stats.map(stat => stat.name);
    const values = stats.map(stat => stat.base_stat);

    if (myChart) {
        myChart.data.labels = labels;
        myChart.data.datasets[0].data = values;

        myChart.options.aspectRatio = 2;

        myChart.update();
    } else {
        const ctx = document.getElementById('pokemonStatsChart').getContext('2d');
        myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: [{
                    data: values,
                    backgroundColor: ['rgba(255, 0, 0, 0.8)', 'rgba(255, 93, 0, 0.8)', 'rgba(255, 208, 0, 0.8)', 
                    'rgba(85, 133, 255, 0.8)', 'rgba(117, 227, 97, 0.8)', 'rgba(250, 85, 155, 0.8)'],
                    borderWidth: 1
                }]
            },
            options: {
                aspectRatio: 2,
                scales: {
                    y: {
                        beginAtZero: false,
                        suggestedMin: 0,
                        suggestedMax: 120
                    }  
                },
                plugins: {
                    legend: {display: false},
                title: {
                    display: true,
                    text: 'Pokemon Base Stat',
                    position: 'top',
                    font: {
                        size: 16,
                        weight: 'bold'
                    }
                }
            }
        }
    });
    }
}
=======
            console.log(pokemonData);
        })
        .catch(error => console.error('Error fetching data:', error));
}
>>>>>>> 7410dc78f00a259f4d6d7c43e8f6317fe972ddce
