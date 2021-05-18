const { default: PokemonCardButtons } = require('./PokemonCardButtons');

const PokemonCard = ({ pokemon }) => {
  return (
    <div className='relative z-30 flex flex-col items-center px-4 py-2 duration-500 transform rounded-lg group drop-shadow-lg bg-slate-base hover:scale-105'>
      <img className='w-32 h-32' src={pokemon.image} alt={pokemon.name} />

      <div className='my-2'>
        <h1 className='text-2xl font-bold text-black capitalize text-opacity-60'>
          {pokemon.name}
        </h1>

        {/* Pokemon types  */}
        <div className='flex items-center justify-center mt-2 space-x-2'>
          {pokemon.types.map(({ type }, i) => (
            <small
              key={i}
              className='px-2 bg-black rounded-lg select-none bg-opacity-5'
            >
              {type.name}
            </small>
          ))}
        </div>
      </div>

      {/* Action Buttons (show on hover) */}
      <PokemonCardButtons name={pokemon.name} />
    </div>
  );
};

export default PokemonCard;
