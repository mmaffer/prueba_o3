const API_BASE_URL = 'https://dragonball-api.com/api';

export async function fetchCharacters({ limit = 10, page = 1 } = {}) {
  const url = new URL(`${API_BASE_URL}/characters`);
  url.searchParams.set('limit', String(limit));
  url.searchParams.set('page', String(page));

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('No se pudo obtener la lista de personajes');
  }

  return response.json();
}