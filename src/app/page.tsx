import PokemonSearch from '@/components/PokemonSearch';
import { getPokemonList } from '@/api/pokemonApi';

export default async function Home() {
  // API call for get all list pokemon's
  const pokemonList = await getPokemonList();

  return (
    <div className="mb-32 text-center lg:mb-0 lg:text-left">
      <PokemonSearch pokemonList={pokemonList} />
    </div>
  );
}
