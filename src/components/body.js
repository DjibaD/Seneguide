import DataContainer from './dataContainer';
import SideBar from './sideBar';
import {useState, useEffect} from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import {Container, Row, Col} from 'react-bootstrap'
import SearchBar from './searchBar';


function Body(){



    const [destinations, setDestinations] = useState([])
    const [search, setSearch]= useState("")

    useEffect (()=>{
        fetch('http://localhost:3000/destinations')
       .then(r => r.json())
        .then(destinations => setDestinations(destinations))
      },[])

      const [buttons, setButtons]= useState([]) 

      const searchItems = destinations.filter((card) => {
        return card.name.toLowerCase().includes(search.toLowerCase())
    })

    const filter = (button) => {
        const filteredData = destinations.filter(item => item.activity1 === button);
        setDestinations(filteredData)
    }
    


    function addNewDestination(newDestination) {
        fetch('http://localhost:3000/destinations',{
            method:"POST", headers:{
                'Content-Type':'application/json'
            }, body: JSON.stringify(newDestination)
        }).then(r => r.json())
            .then(newDestination => { setDestinations([...destinations, newDestination]) })
    }

    return(
        <div className="body">
            <Container>

<Row>

     <Col lg={{ span: 6, offset: 3 }}>
         <SearchBar 
         setSearch={setSearch}
          />
    </Col>

</Row>

<Row style={{ textAlign:"center", paddingTop:"50px" }}>
    <Col xs={2}><SideBar className="body-element" 
    filter={filter}
    /></Col>


 <Col><DataContainer className="body-element"
   destinations={searchItems || destinations}
   addNewDestination={addNewDestination} />    
 </Col>    

   </Row>


</Container>

        </div>
    )
}

export default Body