//SearchBar.js

import React, { useState } from 'react';
import axios from 'axios';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);

    const handleSearch = (e) => {
        const value = e.target.value;
        setQuery(value);
        if (value) {
            axios.get(`http://localhost:5000/appliances?search=${value}`).then((response) => {
                setResults(response.data);
            });
        } else {
            setResults([]);
        }
    };

    return (
        <div>
            <input
                type="text"
                className="form-control"
                placeholder="Search for appliances..."
                value={query}
                onChange={handleSearch}
            />
            <ul className="list-group mt-2">
                {results.map((item) => (
                    <li key={item.appliance_id} className="list-group-item">
                        {item.type_name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default SearchBar;
