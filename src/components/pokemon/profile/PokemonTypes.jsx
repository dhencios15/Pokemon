const PokemonTypes = ({ types }) => {
  return (
    <div className='flex items-center space-x-4'>
      {types.map(({ type }) => (
        <span
          className='px-2 font-semibold text-black bg-black rounded-lg bg-opacity-10 text-opacity-70'
          key={type.name}
        >
          {type.name}
        </span>
      ))}
    </div>
  );
};

export default PokemonTypes;
