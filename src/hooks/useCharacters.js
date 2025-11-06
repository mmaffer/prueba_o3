import { useCallback, useState } from 'react';
import { fetchCharacters } from '../services/dragonBallApi.js';

function useCharacters() {
  const [characters, setCharacters] = useState([]);
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const loadCharacters = useCallback(async ({ limit = 12, page = 1, append = false } = {}) => {
    setLoading(true);
    try {
      const { items, meta: metaResponse } = await fetchCharacters({ limit, page });
      setCharacters((prev) => (append ? [...prev, ...items] : items));
      setMeta(metaResponse);
      setError(null);
    } catch (err) {
      setError(err.message ?? 'Error inesperado');
    } finally {
      setLoading(false);
    }
  }, []);

  return { characters, meta, loading, error, loadCharacters };
}

export default useCharacters;