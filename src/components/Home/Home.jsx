import React from 'react'
import { ReactSVG } from 'react-svg'
import image from '../../assets/image'
import Appointments from '../Appointments/Appointments'
import './Home.scss'

const Home = () => {
  const files = ["Check Up Results.pdf","Check Up Results.pdf", "Medical Prescription.pdf", "Dental X-Ray Result.pdf"]
  const patientDetails = [
    {
        text: "Gender",
        heading: "Female"
    },
    {
        text: "Birthday",
        heading: "Feb 24th, 1997"
    },
    {
        text: "Phone number",
        heading: "(239)555-0108"
    },
    {
        text: "Registered Date",
        heading: "Feb 24th, 1997"
    },
    {
        text: "Street Address",
        heading: "JL Diponegoro No. 21"
    },
    {
        text: "City",
        heading: "Cilacap"
    },
    {
        text: "Zip Code",
        heading: "655849"
    },
    {
        text: "Member Status",
        heading: "Active Member"
    },
]
  return (
    <div className='app__home'>
    <div className="app__home-container row">
    <div className="app__home-profile col-3 d-flex justify-content-center align-items-center flex-column">
    <img src={image.profile} alt="profile"/>
    <h2 className='patient-name'>Diana Cooper</h2>
    <p className='patient-email'>diana.cooper@example.com</p>

    <div className='app__home-appointment row'>
    <div className='app__home-appointment-details col-6 border-end'>
    <h4 className='heading-appointment'>15</h4>
    <p className='para-appointment'>Past</p>
    </div>
    <div className='app__home-appointment-details col-6'>
    <h4 className='heading-appointment'>02</h4>
    <p className='para-appointment'>Upcoming</p>
    </div>

    <button className='message-btn'>Send Message</button>

    <h4 className='heading-files'>File / Documents</h4>
    <ul>
    {files.map((file) => {
        return (
            <li><button className='file-download-btn'><ReactSVG src={image.note}/> {file}</button></li>
    )
    })}
    </ul>

    </div>
    </div>
    <div className="app__home-patient-details col-9">
    <div className='patient-details row'>
    {
        patientDetails.map((patient) => {
            return (
                <div className='about-patient col-3 p-4'>
                <p className='para-patient'>{patient.text}</p>
                <h5 className='heading-patient'>{patient.heading}</h5>
                <hr/>
                </div>
            )
        })
    }
    </div>
    <Appointments/>
    </div>
    </div>
    </div>
  )
}

export default Home