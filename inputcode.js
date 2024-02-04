
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
                })),
                sprite: data.sprites.front_default,
                pokedexInfo: data.species.url
            };

            
            // console.log(pokemonData);
            updateStatsChart(pokemonData);
            pokemonimagedisplay(pokemonData.sprite);
            PokedexInformation(pokemonData.pokedexInfo)
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

function pokemonimagedisplay(spriteURL) {
    const pokemonImage = document.getElementById("pokemonImage");
    pokemonImage.src = spriteURL;
}

function PokedexInformation(pokedexextract) {
    console.log('Fetching Pokédex data from:', pokedexextract);

    fetch(pokedexextract)
        .then(response => response.json())
        .then(data => {
            const pokedexData = {
                description: data.flavor_text_entries.find(entry => entry.language.name === 'en').flavor_text
            };
            // console.log('Pokedex Data', pokedexData);

            // Display Pokédex information
            displayPokedexInfo(pokedexData);
        })
        .catch(error => console.error('Error fetching Pokédex information:', error));
}

function displayPokedexInfo(pokedexData) {
    const pokedexDataElement = document.getElementById("pokedexData");
    
    // Replace \f with \n in the description
    const formattedDescription = pokedexData.description.replace(/\f/g, '\n');

    // Apply text alignment based on content length
    pokedexDataElement.style.textAlign = formattedDescription.length > 100 ? 'justify' : 'left';
    
    // Update the content with the formatted description
    pokedexDataElement.textContent = formattedDescription;
}