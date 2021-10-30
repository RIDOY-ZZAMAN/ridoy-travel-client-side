import React, { useEffect } from 'react';
import { useState } from 'react';
import img from '../../images/approved.png';
import img1 from '../../images/delete.png'

const ManageBookings = () => {
    const [booked, setBooked] = useState([]);

    useEffect(() => {
        fetch('https://salty-shelf-34271.herokuapp.com/booking')
            .then(res => res.json())
            .then(data => setBooked(data))

    }, [])

    const handleUpdate = (id) => {
        const url = `https://salty-shelf-34271.herokuapp.com/booking/${id}`
        const newStatus = booked.find(bk => bk._id === id);
        newStatus.status = "Approved";
        const approved = window.confirm("Are You want Approved this Service? ");
        if (approved) {
            fetch(url, {
                method: "PUT",
                headers: {
                    'content-type': "application/json",
                },
                body: JSON.stringify(newStatus),

            })
                .then(res => res.json())
                .then(data => {
                    if (data.modifiedCount > 0) {
                        window.location.reload(true);
                        alert("Service Approved Successfully");
                        // setUser({});
                    }
                })
        }

    }

    //DELETE A SERVICE
    const handleDeleteAService = (id) => {
        console.log("Id of this user is", id);
        const url = `https://salty-shelf-34271.herokuapp.com/booking/${id}`;
        const proceed = window.confirm("Are You Sure, You want to Delete this Serviec?")
        if (proceed) {
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remainingUsers = booked.filter(sbk => sbk._id !== id);
                        setBooked(remainingUsers);
                        alert(" Service Deleted Successfully");
                    }
                })

        }
    }
    return (
        <div className="container mb-5  ">
            <h2 className="my-5">Manage Booking</h2>
            <div className="table-responsive">
                <table className="table table-white table-hover">
                    <thead style={{ backgroundColor: "#F5F6FA" }}>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Email Id</th>
                            <th scope="col">Registering Date</th>
                            <th scope="col">Status</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {booked.map(bk => <tbody key={bk._id}>
                        <tr>
                            <th scope="row">{bk.name}</th>
                            <td>{bk.email}</td>
                            <td>30-10-2021</td>
                            <td>{bk.status}</td>
                            <td ><button onClick={() => handleUpdate(bk._id)} className="bg-light d-flex justify-content-center p-1" type="button" style={{ width: "32px", height: "32px", borderRadius: "5px", }}> <img height="24px" width="32px" src={img} alt="" /> </button> <br />

                                <button onClick={() => handleDeleteAService(bk._id)} className="bg-danger d-flex justify-content-center p-1" type="button" style={{ width: "32px", height: "32px", borderRadius: "5px" }}> <img height="24px" width="32px" src={img1} alt="" /> </button>
                            </td>
                        </tr>
                    </tbody>)}
                </table>
            </div>

        </div>
    );
};

export default ManageBookings;