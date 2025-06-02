import { Navbar, Container } from "react-bootstrap";
import { NavLink } from "react-router";
import Logo from '/public/logo.png';
import './topMenu.scss';

const TopMenu = () =>{
  return(
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home"><img src={Logo} alt="Danza" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <ul className="me-auto">
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/products">Products</NavLink></li>
            <li><NavLink to="/blogs">Blogs</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default TopMenu;