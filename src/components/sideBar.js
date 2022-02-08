function SideBar(){

    function handleClick(e){
        console.log(e)
    }

    return(
        <>
        <button className="side bar button" onClick={handleClick}>Parks</button>
        <button className="side bar button" onClick={handleClick}>Hiking</button>
        <button className="side bar button" onClick={handleClick}>Museums</button>
        <button className="side bar button" onClick={handleClick}>Shopping Centers</button>
        <button className="side bar button" onClick={handleClick}>Rock Climbing</button>
        <button className="side bar button" onClick={handleClick}>Water Park</button>
        <button className="side bar button" onClick={handleClick}>Tours</button>
        </>
    )
}

export default SideBar