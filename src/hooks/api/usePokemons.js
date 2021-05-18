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
    .then((res) => res.data)
    .catch((err) => err.response.data);
}

export function usePokemons(params = { limit: 20 }) {
  return useQuery(['pokemons', params], () => fetchPokemons(params));
}
