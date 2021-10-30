import React, { useRef } from 'react';
import './AddNewService.css'


const AddNewService = () => {
    const imgRef = useRef();
    const titleRef = useRef();
    const descriptionRef = useRef()
    const handleAddUser = (e) => {
        e.preventDefault();
        const img = imgRef.current.value;
        const title = titleRef.current.value;
        const description = descriptionRef.current.value;

        const newService = { img, title, description };
        console.log(newService);
        fetch('https://salty-shelf-34271.herokuapp.com/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newService)

        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert("Data Inserted Successfully");
                    e.target.reset();
                }
            })

    }
    return (
        <div className="container">
            <h2 className="mt-3">ADD A NEW SERVICE</h2> <br />
            <form onSubmit={handleAddUser} style={{ maxWidth: "600px" }} className="AddNewService border  border-2 border-secondary rounded mx-auto p-3">
                <h5>Image</h5>
                <input className="form-control border border-secondary  border-2" type="text" ref={imgRef} name="" id="" />  <br /><br />
                <h5>Title</h5>
                <input className="form-control border border-secondary  border-2" type="text" ref={titleRef} name="" id="" /> <br /><br />
                <h5>Description</h5>
                <div className="mb-3">
                    <textarea ref={descriptionRef} className="form-control border-secondary border  border-2" style={{ border: "2px solid gray,", borderRadius: "5px" }} id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                </div>

                <input className="bg-success text-light p-2 mb-3 rounded" type="submit" value="Add Service" />


            </form>
        </div>
    );
};

export default AddNewService;


