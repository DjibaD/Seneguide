import DataContainer from './dataContainer';
import Sidebar from './sidebar';

function Body(){
    return(
        <div className="body">
            <Sidebar className="body-element" />
            <hr/>
            <DataContainer className="body-element" />
        </div>
    )
}

export default Body