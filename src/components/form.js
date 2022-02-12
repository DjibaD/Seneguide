import { useState } from 'react'
import {useHistory} from 'react-router-dom'

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
        <div className="new-form">
            <h2>Add New Destination</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="destination name"
                    name="name"
                    value={name}
                    onChange={(e)=> SetName(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={image}
                    onChange={(e)=> SetImage(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    value={location}
                    onChange={(e)=> SetLocation(e.target.value)}
                />
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={description}
                    onChange={(e)=> SetDescription(e.target.value)}
                />
                <button type="submit">Add Destination</button>
            </form>

        </div>
    )
}

export default Form