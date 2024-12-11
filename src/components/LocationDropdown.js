//locationDropdown.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LocationDropdown = () => {
    const [locations, setLocations] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/locations').then((response) => {
            setLocations(response.data);
        });
    }, []);

    return (
        <select className="form-select">
            <option value="">Select a location</option>
            {locations.map((location, index) => (
                <option key={index} value={location}>
                    {location}
                </option>
            ))}
        </select>
    );
};

export default LocationDropdown;
