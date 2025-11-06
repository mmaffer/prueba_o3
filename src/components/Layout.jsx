import { NavLink, Outlet } from 'react-router-dom';

const activeClass = ({ isActive }) => (isActive ? 'nav-link active' : 'nav-link');

function Layout() {
  return (
    <div className="app-shell">
      <header className="app-header">
        <div className="brand">
          <span className="brand-accent">Dragon Ball</span> Explorer
        </div>
        <nav>
          <NavLink end to="/" className={activeClass}>
            Inicio
          </NavLink>
          <NavLink to="/entities" className={activeClass}>
            Personajes
          </NavLink>
        </nav>
      </header>

      <main className="app-main">
        <Outlet />
      </main>

      <footer className="app-footer">
        Datos cortesía de{' '}
        <a href="https://web.dragonball-api.com/" target="_blank" rel="noreferrer">
          Dragon Ball API
        </a>
      </footer>
    </div>
  );
}

export default Layout;