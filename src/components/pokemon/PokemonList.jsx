import { selectLoading, selectPokemons } from 'features/app/appSlice';
import React from 'react';
import { useSelector } from 'react-redux';
import PokemonCard from './PokemonCard';
import PokemonSkeleton from './PokemonSkeleton';

const PokemonList = () => {
  const pokemons = useSelector(selectPokemons);
  const isLoading = useSelector(selectLoading);
  return (
    <section className='grid grid-cols-4 gap-8 p-8 pb-4 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
      {isLoading
        ? [...Array(8)].map((i) => <PokemonSkeleton key={i} />)
        : pokemons.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
    </section>
  );
};

export default PokemonList;
