import { useState } from 'react'

function Form() {
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

    return (
        <div className="new-form">
            <h2>Add New Destination</h2>
            {/* onSubmit={handleSubmit} */}
            <form >
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