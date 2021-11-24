import React from 'react'
import '../Styles/Event.css'
import DashButton from './DashButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Event(props) {
    let lineup = document.querySelector('.eventContainer')
    console.log(lineup)
    // lineup.addEventListener('click', () => {
    //     lineup.style.border = '1px solid black';
    //     lineup.style.height = '100px';
        

    // })

    return (
        <div className='eventContainer'>
            
           <div  className='eventInfo'>
           <FontAwesomeIcon className='dashDropdownArrow' icon={['fas', 'angle-down']}/>
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
           </div>
            <DashButton class = 'eventButton'/> 
        </div>
    )
}
