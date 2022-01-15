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
    // <div className="nav_bar over-gl">
    //   <Row>
    //     <Col>
    //       <Link exact to="/">
    //         <span className="logo">Mia Tang </span>{" "}
    //       </Link>
    //     </Col>

    //     <Col className="offset-md-9">
    //       <NavLink exact to="/">
    //         Work
    //       </NavLink>
    //     </Col>
    //     <Col>
    //       <NavLink to="/about"> About </NavLink>
    //     </Col>
    //   </Row>
    // </div>
  );
}
