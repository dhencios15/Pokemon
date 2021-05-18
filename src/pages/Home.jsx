import React from 'react';

import Navbar from 'components/Navbar';
import PokemonList from 'components/pokemon/PokemonList';

import { usePokemons } from 'hooks/api/usePokemons';

const Home = () => {
  const pokemonInfo = usePokemons();

  const [pokemons, setPokemons] = React.useState([]);
  const [nextPage, setNextPage] = React.useState(null);
  const [previousPage, setPreviousPage] = React.useState(null);

  if (!pokemonInfo.isLoading) {
    console.log(pokemonInfo.data);
  }

  // Not Necessary, since we're using react-query
  // We're just using this because we're doing CRUD on Local and sync with the Pokemon Api
  React.useEffect(() => {
    if (!pokemonInfo.isLoading) {
      const { data } = pokemonInfo;
      setPokemons(data?.results);
      setNextPage(data?.next);
      setPreviousPage(data?.previous);
    }
  }, [pokemonInfo]);

  return (
    <div className='container py-4 mx-auto'>
      <header>
        <h1 className='text-4xl font-bold tracking-widest text-center text-green-custom'>
          POKEMON
        </h1>
        <Navbar />
      </header>
      <PokemonList pokemons={pokemons} />
    </div>
  );
};

export default Home;
