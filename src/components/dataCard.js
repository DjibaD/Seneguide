import 'bootstrap/dist/css/bootstrap.css'
import {Card} from 'react-bootstrap'
function DataCard({destination}) {
    // console.log(destination)
    return (
        <Card >
            <Card.Img src={destination.image}/>
            <Card.Title><h2>{destination.name}</h2></Card.Title>
            <p>{destination.location}</p>
            <p>{destination.description}</p>
           

           </Card>
    )
}
export default DataCard 