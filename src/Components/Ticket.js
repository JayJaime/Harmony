import React from 'react'
import '../Styles/Ticket.css'
import DashButton from '../Components/DashButton'

export default function Ticket(props) {
    return (
        <div className='ticket'>
            <p className='ticketSeat'>Sec {props.section} {props.seat}, Row {props.row}</p>
            <p className='ticketPrice'>{props.price}</p>
            <DashButton class='eventButton'/>
        </div>
    )
}
