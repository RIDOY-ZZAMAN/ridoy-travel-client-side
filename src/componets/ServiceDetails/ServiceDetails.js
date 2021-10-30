import React, { useEffect, useState, useRef } from 'react';
import { useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import './ServiceDetails.css'


const ServiceDetails = () => {
    const { serviceId } = useParams();
    const nameRef = useRef();
    const emailRef = useRef();
    const serviceRef = useRef();
    const statusRef = useRef()
    const { user } = useAuth();
    const [serviceDetails, setServiceDetails] = useState([]);
    const [singleService, setSingleService] = useState({});

    const handleAddBooking = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const service = serviceRef.current.value;
        const status = statusRef.current.value;


        const booking = { name, email, service, status };
        console.log(booking);
        fetch('https://salty-shelf-34271.herokuapp.com/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Service Booked Successfully");
                    e.target.reset();
                }
            })



    }

    useEffect(() => {
        fetch('https://salty-shelf-34271.herokuapp.com/services')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setServiceDetails(data)
            })


    }, [])

    useEffect(() => {
        const foundService = serviceDetails.find((service) => service._id === serviceId);
        setSingleService(foundService)
    }, [serviceDetails]);

    return (
        <div>
            <h2 className="my-4">Book Our <span className="text-danger">{singleService?.title}</span> Service </h2>
            <div className="container">

                <div className="card mb-3 mx-auto" style={{ maxWidth: "840px" }}>
                    <div className="row g-0">
                        <div className="col-md-12 col-lg-5">
                            <img src={singleService?.img} height="150px" width="150px" alt="..." />
                            <div className="card-body text-center">
                                <h2 className="card-title">{singleService?.title}</h2>
                                <p className="card-text text-start ms-4">{singleService?.description}</p>

                            </div>
                        </div>
                        <div className="col-md-12 col-lg-5">
                            <form onSubmit={handleAddBooking} className="bookservice">
                                <h5>Your Name</h5>
                                <input style={{ width: "360px" }} type="text" ref={nameRef} name="" id="" />  <br /><br />
                                <h5>Your Email</h5>
                                <input style={{ width: "360px" }} type="text" ref={emailRef} value={user?.email} name="" id="" /> <br /><br />
                                <h5>Service Name</h5>
                                <input style={{ width: "360px" }} type="text" ref={serviceRef} value={singleService?.title} name="" id="" /> <br /><br />
                                <input style={{ width: "360px" }} type="text" ref={statusRef} value="Pending" /> <br /> <br />

                                <input className="bg-success text-light p-2 mb-3 rounded fw-bold" type="submit" value="Book The Service" />


                            </form>

                        </div>
                    </div>
                </div>

            </div>
        </div >
    );
};

export default ServiceDetails;


