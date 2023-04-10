import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useLocation } from 'react-router-dom'

const TickedBooked = () => {
    const { state } = useLocation()
    let { bus } = state
    let { formData } = state

    return (
        <div >
            <Navbar />

            <div className='d-flex justify-content-center '>
                <div className='mt-5 shadow  mb-5 bg-light rounded justify-content-center px-5 pb-5'>
                    <span className='d-flex justify-content-center' style={{ fontSize: '40px', }}>&#9989;</span>
                    <h3 className=' d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Booking has been confirmed</h3>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Ticket ID : <strong> 56UHRFT</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Payment ID : <strong> 2545-326E3-7HHH</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Passanger Details : <strong> {formData.name}, {formData.gender}, {formData.age}yrs</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Contact Details : <strong> {formData.phone}</strong></p>


                    <div className="col-md-12 mt-3 shadow p-3  bg-light p-4 rounded">
                        <div className="d-flex justify-content-between pt-3 px-3">
                            <h3>{bus.BusName}</h3>
                        </div>
                        <p className="text-muted px-3">
                            AC Coaches | {bus.SeatsAvailable} Seats left
                        </p>
                        <h6
                            className="d-flex justify-content-between px-3"
                            style={{ fontSize: "18px" }}
                        >
                            {`${bus.DepartureTime}, ${bus.Date}`}
                            <span className="text px-3" style={{ marginLeft: "10px", color: "gray", fontSize: "15px" }}>
                                5h and 54 min
                            </span>
                            {`${bus.ArrivalTime}, ${bus.Date}`}
                        </h6>
                        <div className="d-flex justify-content-between px-3" style={{ fontWeight: "bold", fontSize: "18px" }}>
                            <p className="font-weight-bold"> {bus.Source}</p>
                            <p className='text-muted' style={{ fontSize: "15px", fontWeight: "lighter" }}>to</p>
                            <p className="font-weight-bold"> {bus.Destination}</p>
                        </div>
                    </div>

                </div>
            </div>

            <Footer />
        </div>
    )
}

export default TickedBooked
