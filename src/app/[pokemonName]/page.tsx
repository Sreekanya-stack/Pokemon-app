//  imported API
import { getPokemon } from '@/api/pokemonApi';
//  imported the components
import PokemonImage from '@/components/PokemonImage';
import Breadcrumb from '@/components/Breadcrumbs';

export default async function PokemonDetail({ params }: { params: { pokemonName: string } }) {
  // Destructuring params
  const { pokemonName } = params;

  // API call for pokemon detail page
  const pokemonObject = await getPokemon(pokemonName);

  return (
    <div className="container mx-auto">
      <Breadcrumb pokemonName={pokemonName} />
      <div className="flex justify-center flex-col items-center lg:mx-40 md:mx-16 mt-10">
        <div className="bg-teal-400 w-full flex justify-center rounded-t-xl">
          <div className="m-4 " style={{ position: 'relative', width: '300px', height: '300px' }}>
            <PokemonImage image={pokemonObject?.sprites?.other['official-artwork'].front_default} name={pokemonName} />
          </div>
        </div>
        <div className="flx-col p-4 bg-amber-400 rounded-b-xl">
          <div className="flex flex-wrap">
            <h6 className="font-bold">Name:</h6>
            <p>{pokemonName.charAt(0).toUpperCase() + pokemonName.slice(1)}</p>
          </div>

          <div className="flex flex-wrap">
            <h6 className="font-bold">Type:</h6>
            {pokemonObject.types.map((typeObject: any, index: number) => {
              const typeName = typeObject.type.name;
              const isLast = index === pokemonObject.types.length - 1;
              return (
                <p>
                  {typeName}
                  {isLast ? '' : ','}
                </p>
              );
            })}
          </div>
          <div className="flex flex-wrap">
            <h6 className="font-bold">Stats:</h6>
            {pokemonObject.stats.map((statObject: any, index: number) => {
              const statName = statObject.stat.name;
              const isLast = index === pokemonObject.stats.length - 1;
              return (
                <p>
                  {statName} {isLast ? '' : ','}
                </p>
              );
            })}
          </div>
          <div className="flex flex-wrap">
            <h6 className="font-bold">Abilities:</h6>
            {pokemonObject.abilities.map((abilityObject: any, index: number) => {
              const abilityName = abilityObject.ability.name;
              const isLast = index === pokemonObject.abilities.length - 1;
              return (
                <p>
                  {abilityName}
                  {isLast ? '' : ','}
                </p>
              );
            })}
          </div>
          <div className="flex flex-wrap">
            <h6 className="font-bold">Some Moves: </h6>
            {pokemonObject.moves.map((moveObject: any, index: number) => {
              const moveName = moveObject.move.name;
              const isLast = index === pokemonObject.moves.length - 1;
              return (
                <p>
                  {moveName}
                  {isLast ? '' : ','}
                </p>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
