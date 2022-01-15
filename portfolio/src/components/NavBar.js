import "../styles/nav.scss";
import "../styles/navbar/hamburger-menu.scss";
import { elastic as Menu } from "react-burger-menu";
import { useState } from "react";
import LinkButton from "./Utility/LinkButton";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    const orig = menuOpen;
    setMenuOpen(!orig);
  };

  return (
    <Menu isOpen={menuOpen}>
      <LinkButton className="nav-item" to="/" onClick={handleToggle}>
        Work
      </LinkButton>
      <LinkButton
        className="nav-item"
        to="/about"
        onClick={() => handleToggle()}
      >
        About
      </LinkButton>
    </Menu>
  );
}
