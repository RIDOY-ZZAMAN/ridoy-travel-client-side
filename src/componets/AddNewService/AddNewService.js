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
            <form onSubmit={handleAddUser} className="AddNewService border rounded">
                <h5>Image</h5>
                <input style={{ width: "400px" }} type="text" ref={imgRef} name="" id="" />  <br /><br />
                <h5>Title</h5>
                <input style={{ width: "400px" }} type="text" ref={titleRef} name="" id="" /> <br /><br />
                <h5>Description</h5>
                <textarea name="" id="" ref={descriptionRef} cols="50" rows="5"></textarea> <br /> <br />
                <input className="bg-success text-light p-2 mb-3" type="submit" value="Add Service" />


            </form>
        </div>
    );
};

export default AddNewService;