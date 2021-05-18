import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import Navbar from 'components/Navbar';
import PokemonList from 'components/pokemon/PokemonList';

import {
  selectCurrentUrl,
  setLoading,
  setNextPage,
  setPokemons,
  setPreviousPage,
} from 'features/app/appSlice';

const Home = () => {
  const dispatch = useDispatch();

  // Selectors
  const url = useSelector(selectCurrentUrl);

  // storing to redux local
  React.useEffect(() => {
    dispatch(setLoading(true));
    let cancel;

    function getPokemonInfo(results) {
      results.forEach(async (pokemon) => {
        const res = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );
        const data = await res.json();
        const sanitizePokemon = {
          name: data.name,
          image: data.sprites.other.dream_world.front_default,
          types: data.types,
          id: data.id,
        };
        dispatch(setPokemons(sanitizePokemon));
      });
    }

    axios
      .get(url, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        dispatch(setLoading(false));
        dispatch(setNextPage(res.data.next));
        dispatch(setPreviousPage(res.data.previous));
        getPokemonInfo(res.data.results);
      });

    return () => cancel();
  }, [url, dispatch]);

  return (
    <div className='container py-4 mx-auto'>
      <header>
        <h1 className='text-4xl font-bold tracking-widest text-center text-yellow drop-shadow-xl'>
          PoK<span className='text-hot-pink'>é</span>MoN
        </h1>
        <Navbar />
      </header>
      <PokemonList />
    </div>
  );
};

export default Home;
