import React from 'react';

import PokemonImages from './PokemonImages';
import PokemonTypes from './PokemonTypes';

import { pokemonColor } from './pokemonColor';

const PokemonProfile = ({ pokemon }) => {
  const { back_default, back_shiny, front_default, front_shiny } =
    pokemon.image;

  return (
    <div className='grid py-4 place-items-center'>
      <img
        className='transform translate-y-8 w-52 h-52 drop-shadow-lg'
        src={pokemon.image.other.dream_world.front_default}
        alt={pokemon.name}
      />
      {/* Pokemoncolor: Content bg color, need switch function to prevent bug on load */}
      <div
        className={`${pokemonColor(
          pokemon.color
        )} rounded-lg grid place-items-center w-screen/1.5 pt-10 pb-5`}
      >
        <h1 className='text-3xl font-bold text-center text-black capitalize text-opacity-70'>
          {pokemon.name}
        </h1>
        <div className='flex flex-col items-center mt-2'>
          {/* Pokemon Types  */}
          <PokemonTypes types={pokemon.types} />

          {/* Pokemon Images  */}
          <PokemonImages
            front_default={front_default}
            front_shiny={front_shiny}
            back_default={back_default}
            back_shiny={back_shiny}
          />
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
