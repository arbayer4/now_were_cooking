import { Link } from "react-router-dom";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <nav className="nav">
        <Link id="title" to="/">
          Now We're Cookin'
        </Link>
        <Link className="link" to="/recipes">
          Recipes
        </Link>
        <Link className="link" to="/new">
          Contribute Recipe
        </Link>
      </nav>
    </header>
  );
}

export default Header;
