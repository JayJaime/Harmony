import React from 'react'
import '../Styles/Event.css'
import DashButton from './DashButton'

export default function Event(props) {
    return (
        <div className='eventContainer'>
            <div className='artistPhoto'>
                <img src = {props.artistPhoto} alt = ''></img>
            </div>
            <div className='date'>
                <h3 className='month'>{props.month + ' ' + props.day}</h3>
                <p className='day_time'>{props.weekDay + '⋅' + props.time}</p>
            </div>
            <div className='nameAndLocation'>
                <h3 className='name'>{props.name}</h3>
                <p className='location'>{props.venue + ' - ' + props.city + ', ' + props.state}</p>
                </div> 
            <DashButton/> 
        </div>
    )
}
