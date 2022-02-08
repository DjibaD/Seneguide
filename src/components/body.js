import DataContainer from './dataContainer';
import Sidebar from './sidebar';
import {useState, useEffect} from 'react'


function Body(){
    const [destinations, setDestinations] = useState([])

    useEffect (()=>{
        fetch('http://localhost:3000/destinations')
       .then(r => r.json())
        .then(destinations => setDestinations(destinations) )
      },[])
    return(
        <div className="body">
            <Sidebar className="body-element" />
            <hr/>
            <DataContainer className="body-element" destinations={destinations} />
        </div>
    )
}

export default Body