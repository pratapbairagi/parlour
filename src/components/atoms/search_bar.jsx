

const SearchBar = () => {
    return (
        <div className="input-group input-group-sm w-100" style={{ minWidth: "180px", maxHeight: "35px", maxWidth: "200px" }}>
            <input className="form-control" type="search" placeholder="Search..." name="" id="" />
            <span className="input-group-text btn btn-primary py-0 d-flex justify-content-center align-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
            </span>
        </div>
    )
}

export default SearchBar