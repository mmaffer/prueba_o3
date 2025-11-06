import { useEffect, useState, useMemo } from 'react';
import CharacterCard from '../components/CharacterCard.jsx';
import useCharacters from '../hooks/useCharacters.js';

const PAGE_SIZE = 12;

function Entities() {
  const [page, setPage] = useState(1);
  const { characters, meta, loading, error, loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters({ limit: PAGE_SIZE, page, append: page > 1 });
  }, [page, loadCharacters]);

  const hasMore = useMemo(() => {
    if (!meta) return false;
    return meta.currentPage < meta.totalPages;
  }, [meta]);

  return (
    <section className="entities">
      <header className="entities-header">
        <h1>Listado de Personajes</h1>
        <p>
          Cada tarjeta incluye tres datos clave (raza, ki y afiliación) además del retrato oficial
          que provee la API.
        </p>
      </header>

      {loading && page === 1 && <p className="status">Cargando personajes...</p>}
      {error && <p className="status error">No fue posible cargar los datos: {error}</p>}

      <div className="character-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>

      <div className="entities-actions">
        {hasMore ? (
          <button
            type="button"
            className="load-more"
            onClick={() => setPage((current) => current + 1)}
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Cargar más'}
          </button>
        ) : (
          !loading && <p className="status">No hay más resultados.</p>
        )}
      </div>
    </section>
  );
}

export default Entities;