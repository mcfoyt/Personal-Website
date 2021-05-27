import React from 'react';
import author from '../mike.jpg';

const AboutMe = () => {
    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                        <img className="profile-img" src={author} alt="author..." height="455" width="457"/>
                    </div>           
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="aboutme-heading">About Me</h1>
                    <p>
                        Highly motivated individual with 4+ years of experience in Information Technology. 
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutMe
