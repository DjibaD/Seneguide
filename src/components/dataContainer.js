import DataCard from './dataCard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Form from './form';
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'

function DataContainer({ destinations, addNewDestination }) {
    return (
        <Container>

        <Row xs={3}>
            {destinations.map(destination=>
            // console.log(destination)
                 <DataCard key={destination.id} destination={destination}/>
                ) }

</Row>



{/* <Form addNewDestination={ addNewDestination } /> */}


            </Container>
    )
}

export default DataContainer 