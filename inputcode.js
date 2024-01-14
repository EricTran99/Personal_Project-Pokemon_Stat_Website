function fetchPokemon() {
    const inputElement = document.getElementById("pokemonIdInput");
    const userInput = inputElement.value;
    const dynamicUrl = `https://pokeapi.co/api/v2/pokemon/${userInput}`;
    console.log(dynamicUrl)
};