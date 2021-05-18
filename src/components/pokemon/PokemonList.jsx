import { selectPokemons } from 'features/app/appSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';

const PokemonList = () => {
  const pokemons = useSelector(selectPokemons);
  console.log(pokemons);
  return (
    <section className='grid grid-cols-4 gap-8 p-8 pb-4 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
      {pokemons.map((pokemon) => (
        <PokemonCard key={pokemon.id} pokemon={pokemon} />
      ))}
    </section>
  );
};

export default PokemonList;
