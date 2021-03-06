// import { useMediaPredicate } from "react-media-hook";
import { Link } from "react-router-dom";
import Burger from "./Burger";
// import(useMediaPredicate) from "react-media-hook";
import "./Header.css";

function Header(props) {
  return (
    <header>
      <nav className="nav">
        <div className="header-container">
          <Link id="title" to="/">
            Now We're Cookin'
          </Link>
          <div className="right-nav-container">
            <Burger />
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
