import React from 'react';

const PokemonList = ({ pokemons }) => {
  return (
    <section className='grid h-screen grid-cols-4 gap-4 p-8 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
      {pokemons.map((pokemon) => (
        <div className='w-20 h-20 p-1 text-black bg-white rounded-lg'>
          {pokemon.name}
        </div>
      ))}
    </section>
  );
};

export default PokemonList;
