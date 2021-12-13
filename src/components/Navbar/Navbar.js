import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="container">
        <h1>
          <Link className="navbarTitle" to="/">
            Capsule
          </Link>
        </h1>
        <nav>
          <a>
            <Link to={"/category/1"}>Juegos</Link>
          </a>
          <a>
            <Link to="/category/2">Tarjetas de Video</Link>
          </a>
          <a>
            <Link to="/category/3">Comics</Link>
          </a>
          <a>
            <Link to="/category/4">Consolas</Link>
          </a>
          <a href="./">
            <i class="fas fa-shopping-cart"></i>
          </a>
        </nav>
      </div>
    </header>
  );
};
