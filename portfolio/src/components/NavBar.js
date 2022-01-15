import "../styles/nav.scss";
import "../styles/navbar/hamburger-menu.scss";
import { elastic as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <Menu>
      <Link id="work" className="menu-item" to="/">
        <span className="nav-item"> Work</span>
      </Link>
      <Link id="about" className="menu-item" to="/about">
        <span className="nav-item"> About </span>
      </Link>
    </Menu>
  );
}
