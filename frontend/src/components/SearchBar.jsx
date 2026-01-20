import React from 'react'

const SearchBar = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="col-md-6 offset-md-3 mb-3 px-5 mx-5">
        <div className="input-group">
            <span className="input-group-text" id="basic-addon1">🔍</span>
            <input 
                type="text" 
                className="form-control" 
                placeholder="Search students by name..."
                // 1. CONTROL: The value comes from the Parent
                value={searchTerm}
                // 2. SIGNAL: When typing, tell Parent to update state
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            {searchTerm && (
            <button 
                className="btn btn-outline-secondary" 
                onClick={() => setSearchTerm("")}
            >
                ❌
            </button>
        )}
        </div>
    </div>
  )
}

export default SearchBar
