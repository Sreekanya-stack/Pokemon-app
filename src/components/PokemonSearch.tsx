'use client';
import React, { useEffect, useState } from 'react';
import PokemonCard from './PokemonCard';
import { SearchIcon } from '@heroicons/react/solid';

interface PokemonSearchProps {
  pokemonList: any;
}
const PokeMonSearch: React.FC<PokemonSearchProps> = ({ pokemonList }) => {
  // defined states
  const [searchText, setSearchText] = useState('');
  const [filteredPokemonList, setFilteredPokemonList] = useState(pokemonList);

  // defined useEffect for filtering list
  useEffect(() => {
    if (searchText.trim() === '') {
      setFilteredPokemonList(pokemonList);
    }
  }, [searchText, pokemonList]);

  // handling the search data
  const handleSearch = () => {
    if (searchText.trim() === '') {
      setFilteredPokemonList(pokemonList);
    } else {
      const filtered = searchFilter(pokemonList, searchText);
      setFilteredPokemonList(filtered);
    }
  };

  // handling the select pokemon type
  const onTypeChange = (type: string) => {
    const filtered = searchFilter(pokemonList, type);
    setFilteredPokemonList(filtered);
  };

  // search filter method
  const searchFilter = (pokemonList: any, filterText: string) => {
    return pokemonList.filter((pokemon: any) => pokemon.name.toLowerCase().includes(filterText.toLowerCase()));
  };

  return (
    <>
      <div className="grid text-center lg:mb-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:text-left">
        <select onChange={(e) => onTypeChange(e.target.value)} className="border p-3.5 rounded">
          <option value="">Select</option>
          {filteredPokemonList.map((type: any) => (
            <option key={type.name} value={type.name}>
              {type.name.charAt(0).toUpperCase() + type.name.slice(1)}
            </option>
          ))}
        </select>
      </div>
      <div className="flex items-center lg:hidden md:hidden sm:hidden mt-4">
        <div className="relative w-full ">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            className="border p-3 rounded flex-1 rounded-none rounded-l-md w-full pl-11"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>

        <button type="button" className="w-24 p-3 bg-indigo-950 text-white rounded-r-md" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="hidden text-center lg:mb-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:text-left mt-4 md:flex lg:flex sm:flex md:grid lg:grid sm:grid">
        <div className="relative lg:w-full md:w-full sm:w-full">
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => setSearchText(e.target.value)}
            className="border p-3 rounded flex-1 rounded-none rounded-l-md w-full pl-11"
          />
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
            <SearchIcon className="w-5 h-5" />
          </div>
        </div>

        <button type="button" className="w-24 bg-indigo-950 text-white rounded-r-md" onClick={handleSearch}>
          Search
        </button>
      </div>

      <div className="mb-32 grid text-left lg:mb-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {filteredPokemonList.map((pokemon: any) => {
          return <PokemonCard name={pokemon.name} key={pokemon.name + 'Card'} />;
        })}
      </div>
    </>
  );
};
export default PokeMonSearch;
