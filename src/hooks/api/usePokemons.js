import { useQuery } from 'react-query';

import Api from 'services/Api';

export async function fetchPokemons(params) {
  return await Api.get('/pokemon', {
    params,
  })
    .then((res) => res.data)
    .catch((err) => err.response.data);
}

export async function fetchOnePokeon(id) {
  return await Api.get(`/pokemon/${id}`)
    .then((res) => {
      const { name, sprites, stats, types, height, weight } = res.data;
      const pokemon = {
        name,
        sprites,
        stats,
        types,
        height,
        weight,
      };
      return pokemon;
    })
    .catch((err) => err.response);
}

export function usePokemons(params) {
  return useQuery(['pokemons', params], () => fetchPokemons(params));
}
