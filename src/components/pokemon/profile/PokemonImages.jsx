const PokemonImages = ({
  front_default,
  front_shiny,
  back_default,
  back_shiny,
}) => {
  return (
    <div className='grid grid-cols-2 mt-5 gap-x-4 gap-y-2'>
      <img className='w-28 h-28' src={front_default} alt='front' />
      <img className='w-28 h-28' src={front_shiny} alt='front_shiny' />
      <img className='w-28 h-28' src={back_default} alt='back' />
      <img className='w-28 h-28' src={back_shiny} alt='front_shiny' />
    </div>
  );
};

export default PokemonImages;
