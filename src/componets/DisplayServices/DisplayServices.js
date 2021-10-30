import React from 'react';
import './DisplayServices.css';
import { useHistory } from 'react-router';

const DisplayServices = (props) => {
    const { _id, title, description, img } = props.service
    const history = useHistory();
    const handleClick = () => {
        history.push(`/serviceDetails/${_id}`);

    }
    return (
        <div className="col displayService">
            <div className="card mx-auto" style={{ width: "18rem" }}>
                <img src={img} className="card-img-top" alt="..." height="200px" />
                <div className="card-body">
                    <h5 className="card-title"> {title}</h5>
                    <p style={{ textAlign: "justify" }} className="card-text">{description}</p>
                    <button className="btn btn-danger" onClick={handleClick}>See Details</button>
                </div>
            </div>

        </div>
    );
};

export default DisplayServices;










