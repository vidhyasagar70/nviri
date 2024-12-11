//TechnicianCarousel.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';

const TechnicianCarousel = () => {
    const [technicians, setTechnicians] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/featured-technicians').then((response) => {
            setTechnicians(response.data);
        });
    }, []);

    return (
        <Carousel>
            {technicians.map((technician) => (
                <Carousel.Item key={technician.technician_id}>
                    <img
                        className="d-block w-100"
                        src={technician.photo || 'https://via.placeholder.com/800x400'}
                        alt={technician.name}
                    />
                    <Carousel.Caption>
                        <h3>{technician.name}</h3>
                        <p>{technician.specialization}</p>
                        <p>Rating: {technician.rating.toFixed(1)}</p>
                    </Carousel.Caption>
                </Carousel.Item>
            ))}
        </Carousel>
    );
};

export default TechnicianCarousel;
