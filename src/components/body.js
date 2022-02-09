import DataContainer from './dataContainer';
import SideBar from './sideBar';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import SearchBar from './searchBar';

function Body(){
    const [destinations, setDestinations] = useState([])

    useEffect (()=>{
        fetch('http://localhost:3000/destinations')
       .then(r => r.json())
        .then(destinations => setDestinations(destinations) )
      },[])
    return(
        <div className="body">
            <Container>

<Row>

     <Col lg={{ span: 6, offset: 3 }}>
         <SearchBar/>
    </Col>

</Row>

<Row style={{ textAlign:"center", paddingTop:"50px" }}>
    <Col xs={2}><SideBar className="body-element" /></Col>


 <Col><DataContainer className="body-element" destinations={destinations} />    
 </Col>    

   </Row>


</Container>

        </div>
    )
}

export default Body