//contentpage2.js

import React from 'react';
import "./contentpage2.css";

const ContentPage2 = () => {
    return (
        <div>
            <div className="vendors-section">
                <h1>Featured Vendors</h1>
                <div className="vendors-container">
                    <div className="vendor">
                    <img src="/images/Avatar.png" alt="Vendor Avatar" />
                        <div className="vendor-info">
                            <div className="vendor-name">Metro Hardware</div>
                            <div className="vendor-stats">
                                <div className="stat-item">
                                    <div className="stat-number">22</div>
                                    <div className="stat-label">Services</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">8/10</div>
                                    <div className="stat-label">Rating</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">89</div>
                                    <div className="stat-label">Reviews</div>
                                </div>
                                <div className="show-more">Show more</div>
                            </div>
                        </div>
                    </div>
                    <div className="vendor">
                        <img src="/images/Avatar.png" alt="Vendor Avatar" />
                        <div className="vendor-info">
                            <div className="vendor-name">Metro Hardware</div>
                            <div className="vendor-stats">
                                <div className="stat-item">
                                    <div className="stat-number">22</div>
                                    <div className="stat-label">Services</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">8/10</div>
                                    <div className="stat-label">Rating</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">89</div>
                                    <div className="stat-label">Reviews</div>
                                </div>
                                <div className="show-more">Show more</div>
                            </div>
                        </div>
                    </div>
                    <div className="vendor">
                    <img src="/images/Avatar.png" alt="Vendor Avatar" />
                        <div className="vendor-info">
                            <div className="vendor-name">Metro Hardware</div>
                            <div className="vendor-stats">
                                <div className="stat-item">
                                    <div className="stat-number">22</div>
                                    <div className="stat-label">Services</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">8/10</div>
                                    <div className="stat-label">Rating</div>
                                </div>
                                <div className="stat-item">
                                    <div className="stat-number">89</div>
                                    <div className="stat-label">Reviews</div>
                                </div>
                                <div className="show-more">Show more</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h1>See what our happy customers have to say about us</h1>
                <div className='container2'>
                    <div className='service-icon3-container'>
                        <img src="/images/peter.png" className='service-icon3' alt="Details" />
                        <div className='service-details'>
                            <h6>Details</h6>
                            <p>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                        </div>
                    </div>
                    <div className='service-icon3-container'>
                        <img src="/images/peter.png" className='service-icon3' alt="Technician" />
                        <div className='service-details'>
                            <h6>Technician</h6>
                            <p>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                        </div>
                    </div>
                    <div className='service-icon3-container'>
                        <img src="/images/peter.png" className='service-icon3' alt="Fixed" />
                        <div className='service-details'>
                            <h6>Fixed</h6>
                            <p>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentPage2;
