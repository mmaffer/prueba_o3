import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <section className="not-found">
      <h1>404</h1>
      <p>No encontramos la ruta solicitada.</p>
      <Link to="/" className="hero-cta">
        Volver al inicio
      </Link>
    </section>
  );
}

export default NotFound;