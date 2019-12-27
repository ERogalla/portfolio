import React from 'react';


const About = () => {
    return (
        <div className="row">
            <div className="col-xl-10">
                <div className="content-column-content">
                    <h1>About me!</h1>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="lead">I am a first year Computer Science student at the University of Texas at Austin! I went to North-Garland Highschool and graduated top 5% of my school.
                            I learned Java through professional programming classes in School. I taught myself the Python, Javascript, and HTML/CSS languages. I am currently learning the Django Framework and Tensorflow.   </p>
                        </div>
                        <div className="col-md-4">
                            <img src="emilio.jpeg" alt="Profile" />
                        </div>
                    </div>
                    <h4 className="text-uppercase">Education</h4>
                    <p>Current Classes</p>
                    <ul>
                        <li>Computer Organization and Architecture</li>
                    </ul>
                    <p>Previously Classes</p>
                    <ul>
                        <li>Data Structures</li>
                        <li>Discreet Mathematics</li>
                        <li>AP Computer Science</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
    
export default About;
