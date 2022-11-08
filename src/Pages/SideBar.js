import React from 'react'
import radiobarSm from '../images/radiobarSm.jpg'

export default function SideBar() {
  return (
    <div className='sideBar'>
      <div className='flexCol'>
        <p>Hello and Welcome! <br />
        This page represents a Programmer Meet-up <br />
        When: Sunday at Noon <br />
        Where: Radio Bar <br />
        2408 W Northwest Blvd, Spokane, WA 99205 <br />
        +15093270418</p>
        <div className='flexRow'>
        <img className="radioBarInside" src={radiobarSm} alt="radioBar" />
        </div>
        <h5>All are Welcome to Attend!</h5>
        <p>Bring your laptop and grab a drink!</p>
      </div>
       
        
    </div>
  )
}
