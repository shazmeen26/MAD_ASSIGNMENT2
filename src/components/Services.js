import React from 'react';
import one from '../image/party1.svg';
import two from '../image/restaurant1.svg';
import three from '../image/restaurant4.svg';

function Services() {
    return (
        <div id="services">
            <br />
            <hr />
            <br /><br />
            <span className="firstheading"><h1 >Services</h1></span>
            {/* <span className="secondheading"><h1>MSR Restaurant</h1></span> */}
            <br />
            <br />
            <div className="card">
                <br />
                <img src={one} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Birthday</h2> <h2 className="card-title">Party</h2>
                    <p className="text para">Celebrate with us in style! Our venue offers tailored services for birthdays, from intimate gatherings to lavish affairs. Let us bring your vision to life with customizable menus and decor, while our attentive staff ensures a memorable experience for you and your guests.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={two} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Business</h2><h2 className="card-title">Meeting</h2>
                    <p className="text para">Elevate your corporate events with our professional facilities. Our modern spaces are equipped for productive discussions, presentations, and networking. Enjoy catering options ranging from light refreshments to full-course meals, all delivered with efficiency and excellence.</p>
                </div>
            </div>

            <div className="card">
                <br />
                <img src={three} alt="pic" className="card-img-top" />
                <div className="card-body">
                    <h2 className="card-title">Small</h2><h2 className="card-title">Function</h2>
                    <p className="text para">Planning a gathering? Our cozy venue is perfect for intimate events. Whether it's a bridal shower, anniversary, or family get-together, our dedicated team will ensure every detail is executed flawlessly. Let us create cherished memories for you and your guests.</p>
                </div>
            </div>
        </div>
    );
}

export default Services;