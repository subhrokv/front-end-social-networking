import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
    return (
        <section className="landing">
            <div className="dark-overlay">
                <div className="landing-inner">
                <h1 className="x-large">Team Cognito Network</h1>
                <p className="lead">
                    Create a profile, share posts and get help from
                    other members of Team Cognito
                </p>
                <div className="buttons">
                    <Link to="/register" className="btn btn-primary">Sign Up</Link>
                    <Link to="/login" className="btn btn-light">Login</Link>
                    <Link to="/profile" className="btn btn-light">Profile</Link>
                </div>
                </div>
            </div>
    </section>
    )
}

export default Landing;