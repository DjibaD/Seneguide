import { useState } from 'react'

function Form({ addNewDestination }) {
    const [destinationForm, setDestinationForm] = useState({
        name: "",
        image: "",
        location: "",
        description: ""
    })

    function manageDestinationForm(event) {
        console.log(event.target.value)
        let name = event.target.name;
        let value = event.target.value;
        setDestinationForm({
            ...destinationForm,
            [name]: value
        });
    }

    function handleSubmit(e) {
        e.preventDefault()
        const newDestinationData = { name: destinationForm.name, 
            image: destinationForm.image, 
            location: destinationForm.location, 
            description: destinationForm.description 
        }
        addNewDestination(newDestinationData)
        e.target.reset()
    }

    return (
        <div className="new-form">
            <h2>Add New Destination</h2>
            <form onSubmit={handleSubmit} >
                <input
                    type="text"
                    placeholder="destination name"
                    name="name"
                    value={destinationForm.name}
                    onChange={manageDestinationForm}
                />
                <input
                    type="text"
                    placeholder="Image URL"
                    name="image"
                    value={destinationForm.image}
                    onChange={manageDestinationForm}
                />
                <input
                    type="text"
                    placeholder="location"
                    name="location"
                    value={destinationForm.location}
                    onChange={manageDestinationForm}
                />
                <input
                    type="text"
                    placeholder="description"
                    name="description"
                    value={destinationForm.description}
                    onChange={manageDestinationForm}
                />
                <button type="submit">Add Destination</button>
            </form>

        </div>
    )
}

export default Form