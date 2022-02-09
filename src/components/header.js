import 'bootstrap/dist/css/bootstrap.css'
import image1 from './../assets/Pink Lake.jpg'
import image2 from './../assets/St Louis City.jpg'
import {Navbar, NavbarBrand,Container,Row,Col, Nav,Carousel} from 'react-bootstrap'
function Header() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
    return (
        <>
         <Navbar className="justify-content-center">
            <Navbar.Brand>Seneguide</Navbar.Brand>
            <Nav>
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#features">About</Nav.Link>
                 <Nav.Link href="#pricing"></Nav.Link>
          </Nav>
        </Navbar>
      <Carousel>
      <Carousel.Item>
    <img
      className="d-block w-100"
      src={image1}
      alt="Second slide"
    />
     </Carousel.Item>
     <Carousel.Item>
    <img
      className="d-block w-100"
      src={image2}
      alt="Second slide"
    />
     </Carousel.Item>
      </Carousel>


        <Container>

            <Row >
                <Col></Col>
                <Col>
        <Navbar bg="mywhite" variant="light">
        <Navbar.Brand href="#home">
        <img
          alt=""
          src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
          width="40"
          height="65"
          className="d-inline-block align-top"
        />{' '}

      </Navbar.Brand>
            <Navbar.Brand>
            <h1>Places To Visit In Senegal</h1> 
            </Navbar.Brand> 
            
            </Navbar>
            </Col>
            <Col></Col>
            </Row>
        </Container>

        {/* <SearchBar/> */}



        </>
    );
}

export default Header