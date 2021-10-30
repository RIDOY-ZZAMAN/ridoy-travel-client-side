import React, { useEffect, useState } from 'react';
import './Home.css'

import DisplayServices from '../DisplayServices/DisplayServices';
import banner from '../../images/banner3.png';
import blog1 from '../../images/blog/blog1.jpg';
import img from '../../images/contact.JPG'




const Home = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        fetch('https://salty-shelf-34271.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
        setLoading(false);

    }, [])



    return (

        <div className="container">
            <div className="row d-flex align-items-center p-3">
                <div className="col-lg-5 col-md-12">
                    <h2 className="text-start"><span className="text-danger ">RIDOY</span> TRAVEL</h2>
                    <p style={{ textAlign: "justify" }}>Ridoy Travel is the best Teavel Agency at your area. We Ensure high services to our Customers</p>

                </div>
                <div className="col-md-12 col-lg-7">
                    <img className="img-fluid" src={banner} alt="" />

                </div>
            </div>
            <h3 className="my-5">OUR <span className="text-danger">SERVICES</span> </h3>

            <div className="row row-cols-1 row-cols-lg-3 g-4">
                {
                    loading ? <><div className="spinner-border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </div></> :

                        services.map(service => <DisplayServices key={service._id} service={service}></DisplayServices>)


                }


            </div>
            {/*----------------- extra section 1 start------------------- */}
            <div className="container my-5">
                <div className="row">
                    <p className="fw-bold"><i>To Get More Tips And Tricks</i></p>
                    <h2 className="mb-3">Read Our Daily Blog
                    </h2>
                    <div className="col-md-7 col-sm-12 text-center mb-3">
                        <div className="card" style={{ width: "100%" }}>
                            <img src={blog1} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <i className="far fa-calendar-alt"></i> <span className="me-5">30 Nov</span>
                                <i className="far fa-user"></i> <span>John Anderson</span>
                                <p className="card-text text-center fw-bold">How Not To Get Lost In Foreign Country</p>
                                <button className="btn-danger rounded">Read More <i className="fas fa-long-arrow-alt-right"></i></button>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-5 col-sm-12">
                        <div className="border rounded bg-light">
                            <div>
                                <i className="far fa-calendar-alt"></i> <span className="me-5">30 Nov</span>
                                <i className="far fa-user"></i> <span>John Anderson</span>
                            </div>
                            <p className="fw-bold">The Best Place To Visit With Familiy</p>
                            <button className="btn-danger rounded mb-2">Read More <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <div className="border rounded bg-light my-3">
                            <div>
                                <i className="far fa-calendar-alt"></i> <span className="me-5">30 Nov</span>
                                <i className="far fa-user"></i> <span>John Anderson</span>
                            </div>
                            <p className="fw-bold">The Best Place To Visit With Familiy</p>
                            <button className="btn-danger rounded mb-2">Read More <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <div className="border rounded bg-light">
                            <div>
                                <i className="far fa-calendar-alt"></i> <span className="me-5">30 Nov</span>
                                <i className="far fa-user"></i> <span>John Anderson</span>
                            </div>
                            <p className="fw-bold">The Best Place To Visit With Familiy</p>
                            <button className="btn-danger rounded mb-2">Read More <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <div className="border rounded bg-light mt-3">
                            <div>
                                <i className="far fa-calendar-alt"></i> <span className="me-5">30 Nov</span>
                                <i className="far fa-user"></i> <span>John Anderson</span>
                            </div>
                            <p className="fw-bold">The Best Place To Visit With Familiy</p>
                            <button className="btn-danger rounded mb-2">Read More <i className="fas fa-long-arrow-alt-right"></i></button>
                        </div>
                        <button className="btn-danger rounded mb-2 mt-3 px-5">More... </button>
                    </div>

                </div>

            </div>

            {/*----------------- extra section 1 end------------------- */}


            {/*----------------- extra section 2 start------------------- */}
            <div>
                <div className="row my-5">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid" src={img} alt="" />
                    </div>
                    <div className="col-md-6 col-12">
                        <p className="fw-bold   "><i>Contact With Us
                        </i></p>
                        <h2>We'll Love To Hear From You
                        </h2>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Name*" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Your Email*" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Phone Number*" />
                        </div>
                        <div className="mb-3">
                            <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="Message Subject*" />
                        </div>
                        <div className="mb-3">
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Your Message"></textarea>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input " id="exampleCheck1" />
                            <label className="form-check-label" htmlFor="exampleCheck1">I have read the <span className="text-primary">terms </span> & <span className="text-primary">condition</span></label>
                        </div>
                        <button type="button" className="btn btn-primary mt-4">Send Your Message</button>
                    </div>
                </div>

            </div>





            {/*----------------- extra section 2 end------------------- */}





        </div>



    );
};

export default Home;