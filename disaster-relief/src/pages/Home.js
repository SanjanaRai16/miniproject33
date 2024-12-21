import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div>
            <h1>Welcome to the Disaster Relief Platform</h1>
            <Link to="/signup/admin">Admin Signup</Link>
            <Link to="/signup/volunteer">Volunteer Signup</Link>
            <Link to="/signup/user">User Signup</Link>
            <Link to="/login">Login</Link>
        </div>
    );
};

export default Home;
