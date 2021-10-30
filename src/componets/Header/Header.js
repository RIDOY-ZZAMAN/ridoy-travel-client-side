import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'


const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-primary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white" to="#">

                        Ridoy Travel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav navigationLink ms-auto">
                            <Link to="/">Home</Link>
                            <Link to="/about">About</Link>

                            {/* <Link to="/mybooking">My Booking</Link>
                            <Link to="/addnewservice">Add New Service</Link>
                            <Link to="/managebooking">Manage Booking</Link> */}

                            {user?.email ? (<>
                                <Link to="/mybooking">My Booking</Link>
                                <Link to="/addnewservice">Add New Service</Link>
                                <Link to="/managebooking">Manage Booking</Link>
                                <span style={{ color: "white", paddingTop: "10px" }}>{user ? user.displayName : user.email}</span>
                                <button className="btn btn-danger" onClick={logOut}>Logout</button>
                            </>
                            )
                                :
                                (<Link to="/login">Login</Link>)}

                        </div>
                    </div>
                </div>
            </nav >

        </div >
    );
};

export default Header;