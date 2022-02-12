import { useState } from 'react'
import {useHistory} from 'react-router-dom'
import {Container, Row,Col,Button} from 'react-bootstrap'

function Form({ addNewDestination }) {
    const history = useHistory()
    // const [destinationForm, setDestinationForm] = useState({
    //     name: "",
    //     image: "",
    //     location: "",
    //     description: ""
    // })

    const [name, SetName] = useState('');
    const [image, SetImage] = useState('');
    const [location, SetLocation] = useState('');
    const [description, SetDescription] = useState('');

    // function manageDestinationForm(event) {
    //     console.log(event.target.value)
    //     let name = event.target.name;
    //     let value = event.target.value;
    //     setDestinationForm({
    //         ...destinationForm,
    //         [name]: value
    //     });
    // }


    function handleSubmit(e) {
        const newDestinationData={name, image, location, description}
        fetch('http://localhost:3000/destinations',{
            method: 'POST',
            headers:{"Content-Type":"application/json" },
            body: JSON.stringify(newDestinationData)
        }).then(()=>{
            console.log('new blog added');
            history.push('/')
        })
    }

    return (
        <Container className="formstyle"  >
            <Row >
                <Col className="mt-4">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" alt='Flag of Senegal'></img>
                </Col>
                <Col xs={7}>

        <div className="new-form" className="mt-4" >
            <h2>Add New Destination</h2>
            <Row>
            <form onSubmit={handleSubmit} className="formstyle">
                    <Row>
                <input
                className="mt-2"
                    type="text"
                    placeholder="destination name"
                    name="name"
                    value={name}
                    onChange={(e)=> SetName(e.target.value)}
                />
                </Row>
                <Row>
                <input
                className="mt-2"
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={image}
                    onChange={(e)=> SetImage(e.target.value)}
                />
                 </Row>
                <Row>
                <input
                className="mt-2"
                    type="text"
                    placeholder="location"
                    name="location"
                    value={location}
                    onChange={(e)=> SetLocation(e.target.value)}
                />
                </Row>
                <Row>
                <input
                className="mt-2"
                    type="text"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={(e)=> SetDescription(e.target.value)}
                />
                </Row>
                <Row>
                <Button className="mt-4 mb-5" type="submit">Add Destination</Button>
                </Row>
            </form>
            </Row>

        </div>
        </Col>
        <Col></Col>
        </Row>
         </Container>
    )
}

export default Form