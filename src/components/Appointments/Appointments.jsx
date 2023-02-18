import React from 'react'
import { ReactSVG } from 'react-svg'
import image from '../../assets/image'
import './Appointments.scss'

const Appointments = () => {
  return (
    <div className='appointments-container'>
    <div className='appointments-navbar'>
    <button type='button' className='appointments-btn'>Upcoming Appointments</button>
    <button type='button' className='appointments-btn'>Past Appointments</button>
    <button type='button' className='appointments-btn'>Medical Records</button>
    </div>

    <div className='appointments-main'>
    <div className='appointments-head'>
    <h6>Root Canal Treatment</h6>
    <button type='button' className='treatments-btn'>Show Previous Treatments</button>
    </div>
    <hr/>

    <div className='appointments-body'>
    <div className='appointments-date-time'>
    <h2>26 Nov'19</h2>
    <p>09:00 - 10:00</p>
    </div>
    <div className='appointments-treatment'>
    <p>Treatments</p>
    <h5>Open Access</h5>
    </div>
    <div className='appointments-dentist'>
    <p>Dentist</p>
    <h5>Drg. Adam H.</h5>
    </div>
    <div className='appointments-nurse'>
    <p>Nurse</p>
    <h5>Jessicamila</h5>
    </div>
    <div className='appointments-note'>
    <button type='button'><ReactSVG src={image.note}/> Note</button>
    </div>
    </div>

    <div className='appointments-body'>
    <div className='appointments-date-time'>
    <h2>26 Nov'19</h2>
    <p>09:00 - 10:00</p>
    </div>
    <div className='appointments-treatment'>
    <p>Treatments</p>
    <h5>Open Access</h5>
    </div>
    <div className='appointments-dentist'>
    <p>Dentist</p>
    <h5>Drg. Adam H.</h5>
    </div>
    <div className='appointments-nurse'>
    <p>Nurse</p>
    <h5>Jessicamila</h5>
    </div>
    <div className='appointments-note'>
    <button type='button'><ReactSVG src={image.note}/> Note</button>
    </div>
    </div>
    
    </div>
    </div>
  )
}

export default Appointments