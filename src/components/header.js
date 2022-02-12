import 'bootstrap/dist/css/bootstrap.css'
import {Navbar,Container,Row,Col} from 'react-bootstrap'
import Carousell from './Carousell'
function Header() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
    return (
        <>
         
         <Carousell/>
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