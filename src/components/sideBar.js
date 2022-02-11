import 'bootstrap/dist/css/bootstrap.css'
import {Button, Container, Row, Col} from 'react-bootstrap'


function SideBar({filter}){

    
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
           onClick={()=>filter('park')}>Parks</Button>
         <Button variant="outline-secondary" 
           onClick={()=>filter('museum')}>Museums</Button>
        <Button variant="outline-secondary" 
           onClick={()=>filter('tour')}>Tours</Button>
        <Button variant="outline-secondary" 
           onClick={()=>filter('beach')}>Beaches</Button>
           </Row>
       </Container>
        </>
    )
}

export default SideBar