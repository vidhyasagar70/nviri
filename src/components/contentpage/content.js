
//content.js
import React from 'react';
import './content.css';

const Content = () => {
    return (
        <div>
            <h1>All Services</h1>
            <h5>The time is now for it to be okay to be great. For being a bright color. For standing out.</h5>

            <div className='container'>
                <div className='service'>
                    <img src="/images/refrigerator-thin.png" className='service-icon' alt="Fridge" />
                    <div>
                        <h6>Fridge</h6>
                        <p>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                    </div>
                </div>
                <div className='service'>
                    <img src="/images/tv.png" className='service-icon' alt="Air Conditioner" />
                    <div>
                        <h6>Air Conditioner</h6>
                        <p>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                    </div>
                </div>
                <div className='service'>
                    <img src="/images/air.png" className='service-icon' alt="Television" />
                    <div>
                        <h6>Television</h6>
                        <p>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='service'>
                    <img src="/images/gas.png" className='service-icon' alt="Gas Stove" />
                    <div>
                        <h6>Gas Stove</h6>
                        <p>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                    </div>
                </div>
                <div className='service'>
                    <img src="/images/tv.png" className='service-icon' alt="Air Conditioner" />
                    <div>
                        <h6>Air Conditioner</h6>
                        <p>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                    </div>
                </div>
                <div className='service'>
                    <img src="/images/air.png" className='service-icon' alt="Television" />
                    <div>
                        <h6>Television</h6>
                        <p>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                    </div>
                </div>
            </div>

            <div>
                <h1>Book a Request in 3 Simple Steps</h1>
                <div className='container'>
                    <div className='service-icon2-container'>
                        <img src="/images/details.png" className='service-icon2' alt="Details" />
                        <div>
                            <h6>Details</h6>
                            <p>We get insulted by others, lose trust for those others. We get back stabbed by friends. It becomes harder for us to give others a hand.</p>
                        </div>
                    </div>
                    <div className='service-icon2-container'>
                        <img src="/images/technician.png" className='service-icon2' alt="Technician" />
                        <div>
                            <h6>Technician</h6>
                            <p>Don't get your heart broken by people we love, even that we give them all we have. Then we lose family over time. As we live, our hearts turn colder.</p>
                        </div>
                    </div>
                    <div className='service-icon2-container'>
                        <img src="/images/fixed.png" className='service-icon2' alt="Fixed" />
                        <div>
                            <h6>Fixed</h6>
                            <p>What else could rust the heart more over time? Blackgold. The time is now for it to be okay to be great. or being a bright color. For standing out.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;
