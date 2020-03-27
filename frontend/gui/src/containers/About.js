import React from 'react';

const About = () => {
    return (
        <div className="row">
            <div className="col-xl-10">
                <div className="content-column-content">
                    <h1>About me!</h1>
                    <div className="row">
                        <div className="col-lg-8">
                            <p className="lead">I am a first year Computer Science student at the University of Texas at Austin!
                            I learned to program through CS classes in high school and taught myself many languages. I now know Java, Python, some Javascript, and a descent ammount HTML/CSS languages.
							I've also taught myself to use the Django Web Framework and Tensorflow.   </p>
                        </div>
                        <div className="col-md-4">
                            <img src={ require('../static/emilio.jpeg')} alt="Profile Picture" className="rounded-circle img-fluid"></img>
                        </div>
                    </div>
                    <h4 className="text-uppercase">Education</h4>
                    <p>Current Classes</p>
                    <ul className="content-column-content">
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
