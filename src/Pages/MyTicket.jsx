import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const MyTicket = () => {

    let Fdata = localStorage.getItem("FORM")
    let Bdata = localStorage.getItem("BUS")
    Bdata = JSON.parse(Bdata)
    Fdata = JSON.parse(Fdata)



    return (
        <div >
            <Navbar />
            <div className='d-flex justify-content-center '>
                <div className='mt-5 shadow  mb-5 bg-light rounded justify-content-center px-5 pb-5'>
                    <span className='d-flex justify-content-center' style={{ fontSize: '40px', }}>&#9989;</span>
                    <h3 className=' d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Booking has been confirmed</h3>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Ticket ID : <strong> 56UHRFT</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Payment ID : <strong> 2545-326E3-7HHH</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Passanger Details : <strong> {Fdata.name}, {Fdata.gender}, {Fdata.age}yrs</strong></p>
                    <p className='d-flex justify-content-center' style={{ fontFamily: 'serif' }}>Contact Details : <strong> {Fdata.phone}</strong></p>


                    <div className="col-md-12 mt-3 shadow p-3  bg-light p-4 rounded">
                        <div className="d-flex justify-content-between pt-3 px-3">
                            <h3>{Bdata.BusName}</h3>
                        </div>
                        <p className="text-muted px-3">
                            AC Coaches | {Bdata.SeatsAvailable} Seats left
                        </p>
                        <h6
                            className="d-flex justify-content-between px-3"
                            style={{ fontSize: "18px" }}
                        >
                            {`${Bdata.DepartureTime}, ${Bdata.Date}`}
                            <span className="text px-3" style={{ marginLeft: "10px", color: "gray", fontSize: "15px" }}>
                                5h and 54 min
                            </span>
                            {`${Bdata.ArrivalTime}, ${Bdata.Date}`}
                        </h6>
                        <div className="d-flex justify-content-between px-3" style={{ fontWeight: "bold", fontSize: "18px" }}>
                            <p className="font-weight-bold"> {Bdata.Source}</p>
                            <p style={{ fontSize: "15px", fontWeight: "lighter" }}>To</p>
                            <p className="font-weight-bold"> {Bdata.Destination}</p>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}

export default MyTicket
