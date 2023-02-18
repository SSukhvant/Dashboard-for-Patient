import React from 'react'
import { ReactSVG } from 'react-svg'
import image from '../../assets/image'
import './Sidebar.scss'

const Sidebar = () => {
  return (
    <div className='app__sidebar'>
    <div className='logo bg-success'>
    <ReactSVG src={image.graph} className="logo-svg"/>
    </div>
    <ul>
    <li>
    <ReactSVG src={image.add}/>
    <a>NEW</a>
    </li>
    <li>
    <ReactSVG src={image.patient}/>
    <a>PATIENT</a>
    </li>
    <li>
    <ReactSVG src={image.folder}/>
    <a>FOLDER</a>
    </li>
    <li>
    <ReactSVG src={image.upload}/>
    <a>UPLOAD</a>
    </li>
    <li>
    <ReactSVG src={image.report}/>
    <a>REPORT</a>
    </li>
    <li>
    <ReactSVG src={image.setting}/>
    <a>SETTING</a>
    </li>
    <li>
    <ReactSVG src={image.logout}/>
    <a>LOGOUT</a>
    </li>
    </ul>
    </div>
  )
}

export default Sidebar