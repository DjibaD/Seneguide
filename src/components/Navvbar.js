import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavbarBrand,Container,Row,Col, Nav,Carousel} from 'react-bootstrap'
import { NavLink, Link } from 'react-router-dom'

 const Navvbar = () => {
    return (
        <div>
             <Navbar className="justify-content-center">
            
             <Navbar.Brand href="/">

      <img
        src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="React Bootstrap logo"
      />
    </Navbar.Brand>
            <Navbar.Brand href="/">Seneguide</Navbar.Brand>
            <Nav.Link as={Link} to={"/"}>Home</Nav.Link>
            <Nav.Link as={Link} to={"/about"}>About</Nav.Link>
            <Nav.Link as={Link}to={"/create"}>Create New +</Nav.Link>
            <Nav>    
          </Nav>
        </Navbar>
        
        </div>
    )
}

export default Navvbar