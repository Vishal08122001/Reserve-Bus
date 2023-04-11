import React, { useEffect, useState } from 'react';
import { Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import Footer from '../Components/Footer';
import { Carousel } from 'react-bootstrap';
import Navbar from '../Components/Navbar';
import { data } from "../Data/BusData";
import BusData from '../Components/BusData';
import { useNavigate } from 'react-router-dom';
import img1 from '../Assets/img1.jpg'
import img2 from '../Assets/Img2.png'
import img3 from '../Assets/img3.jpg'
import '../Styles/LandingPage.css'



function LandingPage() {
    const Navigate = useNavigate()
    const [filteredData, setFilteredData] = useState([]);
    const [formData, setFormData] = useState({
        source: '',
        destination: '',
        date: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData); // or send the form data to the server

        const filteredData = data.filter((bus) => {
            return (
                bus.Source.toLowerCase() === formData.source.toLowerCase() &&
                bus.Destination.toLowerCase() === formData.destination.toLowerCase() &&
                bus.Date === formData.date
            );
        });

        setFilteredData(filteredData);
        setFormData({
            source: '',
            destination: '',
            date: ''
        });

        Navigate('/Available-buses', { state: { data: filteredData } })

    };


    useEffect(() => {
        window.alert('Kindly choose date as 11-04-2023 to see full functionality!')
    }, [])

    const backgroundImage = {
        backgroundImage: "url('https://st.redbus.in/Images/INDOFFER/FESTIVE200/Hero01.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    };

    const UniqueSource = [...new Set(data.map((val) => val.Source))]
    const UniqueDestination = [...new Set(data.map((val) => val.Destination))]

    return (
        <>

            <Navbar />
            {/* Input Form */}
            <Row className="d-flex justify-content-center" style={backgroundImage}>
                <Col md={6}>
                    <Form onSubmit={handleSubmit} className='p-5' style={{ marginTop: '5rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
                        <div className='d-flex flex-column flex-sm-row justify-content-between mb-4' style={{ display: 'flex', marginBottom: '50px', justifyContent: 'center', alignItems: 'center' }}>
                            <FormGroup style={{
                                appearance: 'none',
                                padding: '10px',
                                border: '2px solid #black',
                                borderRadius: '5px',
                                backgroundImage: 'linear-gradient(to bottom, #ffffff, #ffffff), linear-gradient(to bottom, #f9f9f9, #f9f9f9)',
                                backgroundRepeat: 'no-repeat, repeat-y',
                                backgroundSize: '0 0, 100% 40px',
                                backgroundPosition: 'right 10px top 50%, 0 0'
                            }} className='d-flex flex-column justify-content-start flex-grow-1 me-sm-2'>
                                <Label for="source" className='text-muted' style={{ marginBottom: '10px' }}><strong>From</strong></Label>
                                <select style={{ padding: '5px 30px 10px 0', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }} value={formData.source} onChange={handleChange} name="source" id="source" >
                                    <option value="" className='text-muted'>Select Source</option>
                                    {UniqueSource.map((val, index) => (
                                        <option key={index} value={val.Source}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </FormGroup>

                            <FormGroup style={{
                                appearance: 'none',
                                padding: '10px',
                                border: '2px solid #black',
                                borderRadius: '5px',
                                backgroundImage: 'linear-gradient(to bottom, #ffffff, #ffffff), linear-gradient(to bottom, #f9f9f9, #f9f9f9)',
                                backgroundRepeat: 'no-repeat, repeat-y',
                                backgroundSize: '0 0, 100% 40px',
                                backgroundPosition: 'right 10px top 50%, 0 0'
                            }} className='d-flex flex-column justify-content-start mx-2 flex-grow-1 me-sm-2'>
                                <Label className='text-muted' for="destination" style={{ marginBottom: '10px' }}><strong>To</strong></Label>
                                <select style={{ padding: '5px 30px 10px 0', borderRadius: '5px', border: '1px solid #ccc', width: '200px' }} value={formData.destination} onChange={handleChange} name="destination" id="destination" >
                                    <option value="" className='text-muted' >Select Destination</option>
                                    {UniqueDestination.map((val, index) => (
                                        <option key={index} value={val.Source}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            </FormGroup>

                            <FormGroup style={{
                                appearance: 'none',
                                padding: '10px',
                                border: '2px solid #black',
                                borderRadius: '5px',
                                backgroundImage: 'linear-gradient(to bottom, #ffffff, #ffffff), linear-gradient(to bottom, #f9f9f9, #f9f9f9)',
                                backgroundRepeat: 'no-repeat, repeat-y',
                                backgroundSize: '0 0, 100% 40px',
                                backgroundPosition: 'right 10px top 50%, 0 0'
                            }} className='d-flex flex-column justify-content-start flex-grow-1 me-sm-2'>
                                <Label for="date" className='text-muted' style={{ marginBottom: '10px', width: '200px' }}> <strong>Date of Journey</strong> </Label>
                                <Input type="date" name="date" id="date" placeholder="Select Date" value={formData.date} onChange={handleChange} style={{ color: 'black' }} />
                            </FormGroup>
                        </div>
                        <Button type="submit" className="btn btn-lg mt-3 d-flex justify-content-center" color='primary' style={{ fontWeight: "bold" }} onClick={handleSubmit}>
                            SEARCH
                        </Button>
                    </Form>
                </Col>
            </Row>

            {/* Three Images */}
            <p className='px-5 d-flex justify-content-center' style={{
                fontWeight: "bold",
                marginTop: '3rem',
                fontFamily: "sans-serif",
                fontSize: "30px",
                color: "#333",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textAlign: "center",
                textShadow: "2px 2px #ccc"
            }}>
                Book your journey with world's largest bus platform</p>
            <Row className='justify-content-center p-4'>
                <Col xs={12} md={4} className="mb-4" style={{ height: "300px", width: '300px' }}>
                    <div className="card shadow">
                        <img className="card-img-top" src={img1} alt="img1" />
                        <div className="card-body">
                            <h5 className="d-flex justify-content-center">5,000+</h5>
                            <p className="d-flex justify-content-center text-muted" >tickets booked everyday.</p>
                        </div>
                    </div>
                </Col>
                <Col xs={12} md={4} className="mb-4" style={{ height: "300px", width: '300px' }}>
                    <div className="card shadow">
                        <img className="card-img-top" src={img2} alt="img2" />
                        <div className="card-body">
                            <h5 className="d-flex justify-content-center">20 Million</h5>
                            <p className="d-flex justify-content-center text-muted">happy customers globally.</p>
                        </div>
                    </div>

                </Col>
                <Col xs={12} md={4} className="mb-4" style={{ height: "300px", width: '300px' }}>
                    <div className="card shadow">
                        <img className="card-img-top" src={img3} alt="img3" />
                        <div className="card-body">
                            <h5 className="d-flex justify-content-center">2,000+</h5>
                            <p className="d-flex justify-content-center text-muted " >bus collection.</p>
                        </div>
                    </div>
                </Col>
            </Row>


            {/* Review Section  */}
            <p className='px-5 d-flex justify-content-center' style={{
                fontWeight: "bold",
                marginTop: '1rem',
                fontFamily: "sans-serif",
                fontSize: "30px",
                color: "#333",
                textTransform: "uppercase",
                letterSpacing: "2px",
                textAlign: "center",
                textShadow: "2px 2px #ccc"
            }}>
                Here's what a few of our customers have to say about us
            </p>

            <div className='container-fluid p-5 ' style={{ backgroundColor: "#D3D3D3" }}>
                <Carousel >
                    <Carousel.Item>
                        <div className="row d-flex justify-content-center">
                            <div className="col-md-4 mt-2">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <div className="d-flex justify-content-center align-items-center">
                                                <h1 alt="Profile" className="me-2 shadow" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#FF5733", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>J</h1>
                                            </div>
                                            <div>
                                                <h1 style={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: "bold" }}>John Doe</h1>
                                                <p>Rating: 4.5/5</p>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-muted">Awesome travel experience with reserve Excellent Staff.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <h1 alt="Profile" className="me-2 shadow" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#FF5733", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>V</h1>
                                            <div>
                                                <h1 style={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: "bold" }}>Vishal Chauhan</h1>
                                                <p>Rating: 4.0/5</p>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-muted">Awesome service, Always a best time with reserve.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 mt-2">
                                <div className="card shadow">
                                    <div className="card-body">
                                        <div className="d-flex">
                                            <h1 alt="Profile" className="me-2 shadow" style={{ width: "60px", height: "60px", borderRadius: "50%", backgroundColor: "#FF5733", color: "white", display: "flex", justifyContent: "center", alignItems: "center" }}>P</h1>
                                            <div>
                                                <h1 style={{ fontFamily: "sans-serif", fontSize: "20px", fontWeight: "bold" }}>Pooja Rawat</h1>
                                                <p>Rating: 4.5/5</p>
                                            </div>
                                        </div>
                                        <p className="mt-3 text-muted">Bus was clean and the journey was smooth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Carousel.Item>
                </Carousel>
            </div>
            <BusData data={filteredData} />
            <Footer />
        </>
    );
}

export default LandingPage;
