function SearchBar({setSearch}) {

    function handlechange(e){
        setSearch(e.target.value)
    }
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Destination:</label>
            <input
                type="text"
                id="search"
                placeholder="Enter Name..."
                onChange={handlechange}
            />
        </div>
    )
}

export default SearchBar