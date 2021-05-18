import React from 'react';

const PokemonProfile = ({ pokemon }) => {
  console.log(pokemon);
  const { back_default, back_shiny, front_default, front_shiny } =
    pokemon.image;

  return (
    <div className='grid py-4 place-items-center'>
      <img
        className='transform translate-y-8 w-52 h-52 drop-shadow-lg'
        src={pokemon.image.other.dream_world.front_default}
        alt={pokemon.name}
      />
      <div
        className={`rounded-lg grid place-items-center w-screen/1.5 ${
          pokemon.color ?? 'bg-slate-light'
        } pt-10 pb-5`}
      >
        <h1 className='text-3xl font-bold text-center text-black capitalize text-opacity-70'>
          {pokemon.name}
        </h1>
        <div className='flex flex-col items-center mt-2'>
          <div className='flex items-center space-x-4'>
            {pokemon.types.map(({ type }) => (
              <span
                className='px-2 font-semibold text-black bg-black rounded-lg bg-opacity-10 text-opacity-70'
                key={type.name}
              >
                {type.name}
              </span>
            ))}
          </div>

          <div className='grid grid-cols-2 mt-5 gap-x-4 gap-y-2'>
            <img className='w-28 h-28' src={front_default} alt='front' />
            <img className='w-28 h-28' src={front_shiny} alt='front_shiny' />
            <img className='w-28 h-28' src={back_default} alt='back' />
            <img className='w-28 h-28' src={back_shiny} alt='front_shiny' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonProfile;
