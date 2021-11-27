import React from 'react'
import '../Styles/Ticket.css'
import DashButton from '../Components/DashButton'
// import {useEffect} from 'react'

export default function Ticket(props) {
        //  let tickButt = document.querySelector('.tickButton')
         
        //   tickButt.innerHTML = 'Add to cart'
         
    
    return (
        <div className='ticket'>
            <p className='ticketSeat'>Sec {props.section} {props.seat}, Row {props.row}</p>
            <p className='ticketPrice'>{props.price}</p>
            <DashButton class='tickButton'/>
        </div>
    )
}
