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
            console.log(pokemonData);
        })
        .catch(error => console.error('Error fetching data:', error));
}