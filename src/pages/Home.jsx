import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';

import { PokemonList } from 'components/pokemon';

import {
  selectCurrentUrl,
  setLoading,
  setNextPage,
  setPokemons,
  setPreviousPage,
} from 'features/app/appSlice';
import Layout from 'components/Layout';

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
        const res = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${pokemon.name}`
        );

        const sanitizePokemon = {
          name: res.data.name,
          image: res.data.sprites.other.dream_world.front_default,
          types: res.data.types,
          id: res.data.id,
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
    <Layout>
      <PokemonList />
    </Layout>
  );
};

export default Home;
