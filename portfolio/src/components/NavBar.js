import "../styles/nav.scss";
import "../styles/navbar/hamburger-menu.scss";
import { elastic as Menu } from "react-burger-menu";
import { useState } from "react";
import LinkButton from "./Utility/LinkButton";
import { Col, Row } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleToggle = () => {
    const orig = menuOpen;
    setMenuOpen(!orig);
  };

  return (
    <>
      <div className="mobile-only">
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
      </div>
      <div className="desktop-only">
        <div className="nav_bar over-gl">
          <Row>
            <Col md={{ span: 1 }}>
              <Link exact to="/">
                <span className="logo">mia tang</span>{" "}
              </Link>
            </Col>

            <Col md={{ span: 1, offset: 9 }}>
              <NavLink exact to="/">
                work
              </NavLink>
            </Col>
            <Col>
              <NavLink to="/about"> about </NavLink>
            </Col>
          </Row>
        </div>
      </div>
    </>
  );
}
