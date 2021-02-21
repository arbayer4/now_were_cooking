// import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
import Burger from "./Burger";
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
        <Burger />
      </nav>
    </header>
  );
}

export default Header;
