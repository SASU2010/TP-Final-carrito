import './NavBar.css'
import  {Container, Nav, Navbar, NavDropdown, NavLink } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import 'bootstrap/dist/css/bootstrap.css'
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';


function NavBar () {
    return(
      
      <div className="NavBar">
      <Navbar bg="dark" variant="dark" sticky="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          <Link to='/'><img src={logo} width="120px" height="60px" />{' '}</Link>
        </Navbar.Brand>
        <Navbar.Toggle className="coloring"/>
        <Navbar.Collapse>
          <Nav className='mx-auto'>                    
              <NavLink to="/" as={Link}>Home</NavLink>
              <NavLink to="/Vajilla" as={Link}>Vajilla</NavLink>
              <NavLink to="/TazasyTazones" as={Link}>Tazas Y Tazones</NavLink>
              <NavLink to="/contact" as={Link}>Estemos en Contacto</NavLink>
              <NavLink to="/carrito" as={Link}>carrito</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      </div>
    
    )
}

export default NavBar