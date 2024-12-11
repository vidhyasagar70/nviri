//header.js
import React from "react";
import "./header.css";
import Button from 'react-bootstrap/Button';
import SearchBar from "../SearchBar";
import LocationDropdown from "../LocationDropdown";

const Header = () => {
    return (
        <div>
            <div className="header">
                <div className="logo-container">
                    <img src="/images/bluelogo.png" className="icon" alt="Logo" />
                </div>
                <div className="btn-container">
                    <Button variant="light">Biz Login</Button>
                    <Button variant="warning">Login</Button>
                </div>
            </div>
            <div className="header">
                <div className="content-container">
                    <h1>Take care of your home needs now!</h1>
                    <h5>ServicePro is your one-stop solution to troubleshoot, choose a vendor and book a technician.</h5>
                    <div className="search-section">
                        <LocationDropdown className="short" />
                        <SearchBar className="short" />
                        <Button variant="warning">Search</Button>
                    </div>
                </div>
                <div className="frame-container">
                    <img src='/images/Frame.png' className="frame-icon" alt="Frame" />
                </div>
            </div>
        </div>
    );
};

export default Header;
