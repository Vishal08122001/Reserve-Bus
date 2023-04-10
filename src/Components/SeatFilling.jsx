import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar';
import "../Styles/AvailableBus.css";
import { useLocation } from 'react-router-dom';

const AvailableBus = (props) => {
    const { state } = useLocation();
    const filteredData = state?.data || [];
    const [selectedBus, setSelectedBus] = useState(null);
    const [seats, setSeats] = useState({});


    const handleSeat = (event) => {
        const { name, value } = event.target;
        setSeats((prevSeats) => ({ ...prevSeats, [name]: value }));
    };

    const handleBookNowClick = (bus) => {
        setSelectedBus(bus);
    }

    return (
        <>
            <Navbar />
            <div className="contain">
                <div className="row">
                    <div className="col-12 date-div">Date Vali Div</div>
                </div>
                <div className="row ">
                    <div className="col-md-3  filter-div">Filter Vali div</div>
                    <div className="col-md-9 bus-div">
                        <div className="card border border-primary">
                            <div className="card-body p-0">
                                {filteredData.map((bus) => (
                                    <div key={bus.BusNo} className="card border border-secondary m-3 p-3">
                                        <div className="d-flex justify-content-between ">
                                            <h4>{bus.BusName}</h4>
                                            <div className="btn btn-primary disabled">Fare: {bus.Fare}</div>
                                        </div>
                                        <p className="text-muted">AC Coaches | {bus.SeatsAvailable} Seats left</p>
                                        <h6 className="d-flex justify-content-between" style={{ fontSize: '15px', color: 'blue' }}>
                                            {bus.DepartureTime}
                                            <span className='text-muted' style={{ marginLeft: '10px' }}>5h and 54 min</span>  {bus.ArrivalTime}
                                        </h6>
                                        <div className="d-flex justify-content-between">
                                            <p className="font-weight-bold">From {bus.Source}</p>
                                            <p className="font-weight-bold">To {bus.Destination}</p>
                                        </div>
                                        <div className="d-flex justify-content-center">
                                            <button
                                                className="btn btn-danger"
                                                onClick={() => handleBookNowClick(bus)}
                                            >
                                                Book Now
                                            </button>
                                        </div>
                                        {selectedBus && selectedBus.BusNo === bus.BusNo && (
                                            <div className="mt-3">
                                                <div className=" slot-row" id='input-group' >
                                                    <p className="d-flex " >Select Seats</p>
                                                    <p className="seat"> <label htmlFor="">Type A1</label>
                                                        <input onChange={handleSeat} name="A1" type="number" />
                                                    </p>
                                                    <p className="seat"> <label htmlFor="" >Type A2</label>
                                                        <input onChange={handleSeat} name="A2" type="number" />
                                                    </p>
                                                    <p className="seat"> <label htmlFor="">Type A3</label>
                                                        <input onChange={handleSeat} name="A3" type="number" />
                                                    </p>
                                                    <p className="seat"> <label htmlFor="">Type A4</label>
                                                        <input onChange={handleSeat} name="A4" type="number" />
                                                    </p>
                                                    <p className="seat"> <label htmlFor="">Type D1</label>
                                                        <input onChange={handleSeat} name="D1" type="number" />
                                                    </p>
                                                    <p className="seat"> <label htmlFor="">Type D2</label>
                                                        <input onChange={handleSeat} name="D2" type="number" />
                                                    </p>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </>
    );
};

export default AvailableBus;
