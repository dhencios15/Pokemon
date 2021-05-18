import { InformationCircleIcon, XCircleIcon } from '@heroicons/react/outline';

const PokemonCard = ({ pokemon }) => (
  <div className='relative z-30 flex flex-col items-center px-4 py-2 duration-500 transform rounded-lg group drop-shadow-lg bg-slate-base hover:scale-105'>
    <img className='w-32 h-32' src={pokemon.image} alt={pokemon.name} />

    <div className='my-2'>
      <h1 className='text-2xl font-bold text-black capitalize text-opacity-60'>
        {pokemon.name}
      </h1>

      {/* Pokemon types  */}
      <div className='space-x-2'>
        {pokemon.types.map(({ type }) => (
          <small className='px-2 bg-black rounded-lg select-none bg-opacity-5'>
            {type.name}
          </small>
        ))}
      </div>
    </div>

    {/* Action Buttons (show on hover) */}
    <div className='absolute top-0 right-0 z-30 items-center hidden p-1 -mt-3 space-x-2 transform rounded-lg group-hover:flex bg-navy-lighter'>
      <button className='rounded-full focus:outline-none'>
        <InformationCircleIcon className='w-6 h-6 text-slate-lighter' />
      </button>
      <button className='rounded-full focus:outline-none'>
        <XCircleIcon className='w-6 h-6 text-hot-pink' />
      </button>
    </div>
  </div>
);

export default PokemonCard;
