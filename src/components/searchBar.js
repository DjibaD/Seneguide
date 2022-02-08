function SearchBar() {
    return (
        <div className="searchbar">
            <label htmlFor="search">Search Destination:</label>
            <input
                type="text"
                id="search"
                placeholder="Enter Name..."
                // onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    )
}

export default SearchBar