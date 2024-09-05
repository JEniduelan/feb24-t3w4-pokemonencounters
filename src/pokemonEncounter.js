
async function getPokemon(){
    console.log("Getting Pokemon now!");
    // Hardcoded for development, replace "pickachu" with a random number
    // random number is ID from 1 to 1025
    let apiResponse = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu");
    let apiData = await apiResponse.json();

    //
    let pokemonName = apiData.name;

    return {
        name: apiData.name,
        types: apiData.types,
        image: apiData.sprites.other.home.front_default,
        sound: apiData.cries.latest
    };
}

let encounterButton = document.getElementById("pokemonEncounterButton");

encounterButton.addEventListener("clock", getPokemon);
// encounterButton.addEventListener("click", (even) => getPokemon(event));
encounterButton.addEventListener("click", async (even) => {
    console.log("some block of code in the event listener");
    let pokemonResult = getPokemon();
    console.log(pokemonResult);   
});