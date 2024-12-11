//footer.js
import React from "react";
import Button from 'react-bootstrap/Button';
import './footer.css';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-item contact">
                        <p>Get in touch with us</p>
                        <input type="email" placeholder="Your email" />
                        <p>Hello, we are Lift Media. Our goal is to translate the positive effects from revolutionizing how companies engage with their clients & their team.</p>
                    </div>
                    <div className="footer-item button-container">
                        <Button variant="warning">Book a Service</Button>
                    </div>
                    <div className="footer-item">
                        <ul>
                            <li>Terms</li>
                            <li>Privacy</li>
                            <li>Cookies</li>
                            <li>Business Login</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img src="/images/bluelogo.png" alt="Logo" />
                    </div>
                    <div className="footer-social">
                        <img src="/images/Socialicons.png" alt="Social Icons" />
                    </div>
                </div>
            </div>
        </div> 
    );
};

export default Footer;
