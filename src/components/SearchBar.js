/*
    Rating -> Functional Components
    1. An input field to filter the recipes based on user input
    2. Button to clear the field and reset the filter
    
    props { filterText, onFilterTextInput, handleClearText}
*/

import React from 'react';

const SearchBar = ({filterText, onFilterTextInput, handleClearText}) => {
    return (
        <div className="SearchBar">
            <input
                className="SearchBar__input"
                type="text"
                required={true}
                placeholder="Search recipes..."
                value={filterText || ''}
                onChange={onFilterTextInput}
            />
            <button className="SearchBar__clear" onClick={handleClearText} type="reset"></button>
        </div>
    );
}

export default SearchBar;
  