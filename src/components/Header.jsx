// import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
// import(useMediaPredicate) from "react-media-hook";
import "./Header.css";

function Header(props) {
  // const = bigg
  return (
    <header>
      <nav className="nav">
        <Link id="title" to="/">
          Now We're Cookin'
        </Link>
        <Link className="link" to="/new">
          Contribute Recipe
        </Link>
        <Link className="link" to="/recipes">
          Recipes
        </Link>
      </nav>
    </header>
  );
}

export default Header;
