import "../styles/nav.scss";
import "../styles/navbar/hamburger-menu.scss";
import { elastic as Menu } from "react-burger-menu";

export default function NavBar() {
  return (
    <Menu>
      <a id="work" className="menu-item" href="/">
        <span className="nav-item"> Work</span>
      </a>
      <a id="about" className="menu-item" href="/about">
        <span className="nav-item"> About </span>
      </a>
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
