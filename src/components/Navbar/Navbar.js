import "./Navbar.css";

export const Navbar = () => {
  return (
    <header className="Navbar">
      <div className="container">
        <h1>Capsule</h1>
        <nav>
          <a href="./">Juegos</a>
          <a href="./">Tarjetas de Video</a>
          <a href="./">Comics</a>
          <a href="./">Consolas</a>
        </nav>
      </div>
    </header>
  );
};
