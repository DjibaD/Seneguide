import 'bootstrap/dist/css/bootstrap.css'
import {Button, Container, Row, Col} from 'react-bootstrap'


function SideBar({ setButton, destinations }){

    function handleClick(e){
        const filteredData = destinations.filter(item => item.activity === e.target.textContent.toLowerCase())
        
        setButton(filteredData)
    }


    
    return(
        <>
        <Container> 
           <Row>

               <Col xs={10}>
                   <h3> Pick An Activity</h3>
               </Col>

           </Row>

           <Row>
           <Button variant="outline-secondary" 
                    onClick={handleClick}
                >Parks</Button>
         <Button variant="outline-secondary" 
                    onClick={handleClick}
                >Museums</Button>
        <Button variant="outline-secondary" 
                    onClick={handleClick}
                >Tours</Button>
        <Button variant="outline-secondary" 
                    onClick={handleClick}
                >Beaches</Button>
           </Row>
       </Container>
        </>
    )
}

export default SideBar