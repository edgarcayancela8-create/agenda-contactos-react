import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Agenda de Contactos
        </Link>

        <Link className="btn btn-success" to="/nuevo">
          Nuevo Contacto
        </Link>
      </div>
    </nav>
  );
};

export default Header;