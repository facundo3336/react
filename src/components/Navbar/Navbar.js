import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react/cjs/react.development";
import { CartContext } from "Context/CartContext";

export const Navbar = () => {
  let cartItems = 0;
  const cartContext = useContext(CartContext);

  cartContext.lines.forEach((line) => {
    cartItems = cartItems + line.quantity;
  });

  return (
    <header className="Navbar">
      <div className="container">
        <h1>
          <Link className="navbarTitle" to="/">
            Capsule
          </Link>
        </h1>
        <nav>
          <Link to={"/category/1"}>Juegos</Link>

          <Link to="/category/2">Tarjetas de Video</Link>

          <Link to="/category/3">Comics</Link>

          <Link to="/category/4">Consolas</Link>

          <Link to={"/cart"}>
            <div className="cartIcon">
              <i className="fas fa-shopping-cart"></i>
              {cartItems !== 0 && <span>{cartItems}</span>}
            </div>
          </Link>
        </nav>
      </div>
    </header>
  );
};
