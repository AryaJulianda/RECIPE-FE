import React from "react";
import './SearchBar.css';
// import 'bootstrap'

const SearchBar = ({value,onChange,onSubmit}) => {
    return (
        <div id="box">
            <div className="search-bar">
                <input className="form-control search-field" type="text" placeholder="Search Recipe" aria-label="default input example" value={value} onChange={onChange}/>
                <button type="button" className="btn search-button" onClick={onSubmit}>Search</button>
            </div>

            <div className="tag">
                <button type="button" className="btn bg-yellow">New</button>
                <button type="button" className="btn bg-yellow">Popular</button>
                <button type="button" className="btn bg-green">Vegetarian</button>
                <button type="button" className="btn bg-green">Breakfast</button>
            </div>
        </div>
    );
};

export default SearchBar;