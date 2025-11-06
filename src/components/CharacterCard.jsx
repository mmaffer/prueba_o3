/* eslint-disable react/prop-types */
function CharacterCard({ character, compact = false }) {
  const { name, image, ki, race, affiliation } = character;

  return (
    <article className={`character-card ${compact ? 'compact' : ''}`}>
      <div className="card-image">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{name}</h3>

        {!compact && (
          <ul>
            <li><strong>Raza:</strong> {race || 'Desconocida'}</li>
            <li><strong>Ki:</strong> {ki || 'Sin registro'}</li>
            <li><strong>Afiliación:</strong> {affiliation || 'Ninguna'}</li>
          </ul>
        )}

        {compact && (
          <p className="card-subtitle">
            {race || 'Raza desconocida'} · {affiliation || 'Sin afiliación'}
          </p>
        )}
      </div>
    </article>
  );
}

export default CharacterCard;