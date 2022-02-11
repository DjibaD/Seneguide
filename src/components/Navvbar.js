import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavbarBrand,Container,Row,Col, Nav,Carousel} from 'react-bootstrap'

 const Navvbar = () => {
    return (
        <div>
             <Navbar className="justify-content-center">
            <Navbar.Brand>Seneguide</Navbar.Brand>
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav>    
          </Nav>
        </Navbar>
        </div>
    )
}

export default Navvbar