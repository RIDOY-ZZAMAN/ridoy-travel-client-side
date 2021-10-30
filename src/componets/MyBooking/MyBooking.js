import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';

const MyBooking = () => {
    const { user } = useAuth();
    const [booked, setBooked] = useState([]);
    const [singleBooked, setSingleBooked] = useState([]);


    useEffect(() => {

        fetch('https://salty-shelf-34271.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooked(data))


    }, [])
    useEffect(() => {

        const foundService = booked.filter((bk) => bk.email === user.email);
        setSingleBooked(foundService);

    }, [booked]);

    //DELETE A SERVICE
    const handleDeleteAService = (id) => {

        const url = `https://salty-shelf-34271.herokuapp.com/booking/${id}`;
        const proceed = window.confirm("Are You Sure, You want to Cancel this Serviec?")
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingUsers = singleBooked.filter(sbk => sbk._id !== id);
                        setSingleBooked(remainingUsers);
                        alert("Deleted Successfully");
                    }
                })

        }
    }

    return (
        <div className="container">
            <h2 className="my-5">My Booking {singleBooked.length}</h2>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    singleBooked.length === 0 ? <div className="mx-auto"><div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div> </div> :
                        singleBooked.map(item => <div className="col" key={item._id}>
                            <div className="card border-secondary">
                                <div className="card-body">
                                    <h5 className="card-title">Booking ID: {item._id}</h5>
                                    <h4 className="card-text">Service Name: {item.service}</h4>
                                    <button className="btn-danger p-2 rounded" onClick={() => handleDeleteAService(item._id)}>Cancel This Service</button>
                                </div>
                            </div>
                        </div>)
                }
            </div>


        </div>
    );
};

export default MyBooking;