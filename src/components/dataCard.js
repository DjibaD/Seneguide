function DataCard({destination}) {
    // console.log(destination)
    return (
        <div>
            <h3>{destination.name}</h3>
            <p>{destination.location}</p>
            <p>{destination.description}</p>
           <img src={destination.image}/>
           
        </div>
    )
}
export default DataCard 