import React from 'react';
import { useHistory } from 'react-router';
import img from '../../images/NotFound/notfound.png'

const NotFound = () => {

    const history = useHistory();
    const handleClick = () => {
        history.push("/")

    }
    return (
        <div>
            <img src={img} alt="" style={{ width: "100%", height: "100vh" }} />
            <button type="button" onClick={handleClick} className="btn btn-danger mt-3">Back To Home</button>
        </div>
    );
};

export default NotFound;