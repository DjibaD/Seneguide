function SearchBar() {
    return (
        <div className="search">
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