import DataCard from './dataCard';
import SearchBar from './searchBar';
import Form from './form';


function DataContainer({destinations}) {
    return (
        <div>
            <SearchBar />
            {destinations.map(destination=>
            // console.log(destination)
                 <DataCard key={destination.id} destination={destination}/>
                ) }


            <Form />
        </div>
    )
}

export default DataContainer 