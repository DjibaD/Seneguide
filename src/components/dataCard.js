import 'bootstrap/dist/css/bootstrap.css'
import {Card} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {useState} from 'react'
function DataCard({destination}) {
    const [isShort, setIsShort]= useState(true)

    function handleClick (){
        setIsShort(!isShort)
    }
    return (
        <Card >
            <Card.Img src={destination.image}/>
            <Card.Title><h2>{destination.name}</h2></Card.Title>
            <p>{destination.location}</p>
            <p>
                {isShort? destination.description.slice(0,150) : destination.description }


            </p>  

            <Button onClick={handleClick}> Read more </Button>
           

           </Card>
    )
}
export default DataCard 