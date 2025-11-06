import { useEffect } from 'react';
import CharacterCard from '../components/CharacterCard.jsx';
import useCharacters from '../hooks/useCharacters.js';

function Home() {
  const { characters, loading, error, loadCharacters } = useCharacters();

  useEffect(() => {
    loadCharacters({ limit: 6 });
  }, [loadCharacters]);

  return (
    <section className="home">
      <div className="hero">
        <h1>Dragon Ball Explorer</h1>
        <p>
          Explora los héroes y villanos del universo Dragon Ball. Consulta sus fichas, habilidades y
          curiosidades en un solo lugar.
        </p>
        <a
          className="hero-cta"
          href="https://dragonball-api.com/documentation"
          target="_blank"
          rel="noreferrer"
        >
          Ver documentación del API
        </a>
      </div>

      <section className="grid-section">
        <header className="grid-header">
          <h2>Personajes destacados</h2>
          <p>Se muestran los primeros personajes devueltos por la API pública.</p>
        </header>

        {loading && <p className="status">Cargando personajes...</p>}
        {error && <p className="status error">Hubo un problema: {error}</p>}
        {!loading && !error && characters.length === 0 && (
          <p className="status">No hay personajes para mostrar.</p>
        )}

        <div className="character-grid">
          {characters.map((character) => (
            <CharacterCard key={character.id} character={character} compact />
          ))}
        </div>
      </section>
    </section>
  );
}

export default Home;