import 'bootstrap/dist/css/bootstrap.css'
import {Navbar, NavbarBrand,Container,Row,Col} from 'react-bootstrap'

function Header() {
    const logo = "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg"
    return (
        <>
        <Container>
            <Row >
                <Col></Col>
                <Col>
        <Navbar bg="mywhite" variant="light">
            <Navbar.Brand>
                        <img src={logo}/>
            </Navbar.Brand> 
            <Navbar.Brand></Navbar.Brand>
            <Navbar.Brand>
            <h1>Things To Do In Senegal</h1> 
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