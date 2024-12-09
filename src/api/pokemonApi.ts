// defined API root path
const POKEMON_API = 'https://pokeapi.co/api/v2/';

//  get all list of pokemon's
export async function getPokemonList() {
  try {
    const response = await fetch(POKEMON_API + 'pokemon?limit=200&offset=0');
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
}

// get detailed page details of pokemon
export async function getPokemon(name: string) {
  try {
    const response = await fetch(POKEMON_API + 'pokemon/' + name);
    if (!response.ok) {
      throw new Error('Failed to fetch data');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Pokemon list:', error);
  }
}
