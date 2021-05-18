import axios from 'axios';
import React from 'react';
import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';

import Layout from 'components/Layout';
import { PokemonProfile } from 'components/pokemon';

import { useDocumentTitle } from 'hooks/useDocumentTitle';
import { setError, setLoading } from 'features/app/appSlice';

const Pokemon = () => {
  const dispatch = useDispatch();
  const { pokemon: PokemonName } = useParams();

  const [pokemon, setPokemon] = React.useState(null);

  useDocumentTitle(`Pokemon | ${PokemonName}`);

  React.useEffect(() => {
    dispatch(setLoading(true));
    let cancel;

    async function getPokemonColor(url) {
      const res = await axios.get(url);
      return `bg-${res.data.color.name}-400`;
    }

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then(async (res) => {
        const sanitizePokemon = {
          id: res.data.id,
          name: res.data.name,
          species: res.data.species,
          image: res.data.sprites,
          types: res.data.types,
        };

        const color = await getPokemonColor(sanitizePokemon.species.url);

        setPokemon({ ...sanitizePokemon, color });
      })
      .catch((err) => {
        dispatch(setError('Unable to fetch pokemon'));
      });

    return () => cancel();
  }, [dispatch, PokemonName]);

  return (
    <Layout>
      <section className='p-8 py-4 m-4 border rounded-lg shadow-lg bg-navy-lighter border-navy-light bg-opacity-5'>
        {pokemon ? (
          <PokemonProfile pokemon={pokemon} />
        ) : (
          <h1 className='text-2xl font-bold text-center text-white'>
            <span className='text-3xl text-hot-pink'>Opps!</span> Unable to find
            that pokemon
          </h1>
        )}
      </section>
    </Layout>
  );
};

export default Pokemon;
