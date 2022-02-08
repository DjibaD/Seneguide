function DataCard({destination}) {
    // console.log(destination)
    return (
        <div>
            <p>{destination.name}</p>
            <p>{destination.location}</p>
            <p>{destination.description}</p>
           <img src={destination.image}/>
        </div>
    )
}
export default DataCard 