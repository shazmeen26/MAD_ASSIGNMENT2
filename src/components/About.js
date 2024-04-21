import React, { useState, useEffect } from 'react';

const About = () => {
    const [counts, setCounts] = useState([0, 0, 0, 0]);
    const targetCounts = [20, 78000, 190, 35];
    const duration = 3; // in seconds
    const easing = t => t; // linear easing function

    useEffect(() => {
        const startTimes = counts.map(() => performance.now());
        const endTimes = startTimes.map(startTime => startTime + duration * 1000);

        const updateCounts = () => {
            const newCounts = counts.map((currentCount, index) => {
                const startTime = startTimes[index];
                const endTime = endTimes[index];
                const now = performance.now();
                const timeElapsed = Math.min(1, (now - startTime) / (endTime - startTime));
                const easedProgress = easing(timeElapsed);
                const targetCount = targetCounts[index];
                return Math.floor(easedProgress * targetCount);
            });
            setCounts(newCounts);

            if (counts.some((currentCount, index) => {
                const endTime = endTimes[index];
                return performance.now() < endTime;
            })) {
                requestAnimationFrame(updateCounts);
            }
        };

        requestAnimationFrame(updateCounts);

        return () => {
            // Cleanup function
            cancelAnimationFrame(updateCounts);
        };
    }, []);



    return (
        <div id="about">

            <br />
            <hr />
            <br />
            <br />
            <span className="firstheading"><h1 >About </h1></span>
            {/* <span className="secondheading"><h1>Big Bite</h1></span> */}
            <br />
            <br />
            <br />
            <p className='para'>
At Big Bite, we're not just a restaurant; we're a culinary journey waiting to be savored. Since 2007, we've been crafting unforgettable dining experiences in the heart of [Location], guided by our passion for exceptional food and warm hospitality. Our menu, a fusion of global flavors and local ingredients, offers something for every palate, from sizzling steaks to vibrant vegetarian dishes. Step inside our cozy dining space and let our friendly staff whisk you away on a culinary adventure, where every bite is a testament to our dedication to excellence. Join us at Big Bite and discover why we're more than just a restaurant – we're a destination where flavors collide and memories are made.
            </p>

            <br />

            <div className="abouttext">
                <p id='MyNumber'>{counts[0]}</p>
                <p>Years of Experience</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber2">{counts[1]}</p>
                <p>Happy customers!</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber3">{counts[2]}</p>
                <p>Menus</p>
            </div>

            <div className="abouttext">
                <p id="MyNumber4">{counts[3]}</p>
                <p>Staffs</p>
            </div>
            <br />
            <br />
        </div>
    );
}
export default About;