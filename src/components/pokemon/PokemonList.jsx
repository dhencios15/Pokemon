import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PokemonCard from './PokemonCard';
import PokemonSkeleton from './PokemonSkeleton';

import {
  selectLoading,
  selectPokemons,
  setUrl,
  selectNextPage,
} from 'features/app/appSlice';
const PokemonList = () => {
  const dispatch = useDispatch();

  const pokemons = useSelector(selectPokemons);
  const isLoading = useSelector(selectLoading);
  const nextPage = useSelector(selectNextPage);

  const observer = React.useRef();
  const lastPokemonRef = React.useCallback(
    (node) => {
      if (isLoading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && nextPage) {
          dispatch(setUrl(nextPage));
        }
      });
      if (node) observer.current.observe(node);
    },
    [isLoading, nextPage, dispatch]
  );

  return (
    <section className='grid grid-cols-1 gap-6 p-6 pb-4 m-4 border rounded-lg shadow-lg sm:grid-cols-2 md:grid-cols-4 md:gap-8 md:p-8 bg-navy-lighter border-navy-light bg-opacity-5'>
      {pokemons.map((pokemon) => (
        <PokemonCard ref={lastPokemonRef} key={pokemon.id} pokemon={pokemon} />
      ))}
      {isLoading && [...Array(4).map((_, i) => <PokemonSkeleton key={i} />)]}
    </section>
  );
};

export default PokemonList;
