import React from 'react'
import '../Styles/DashButton.css'

function ticketPage(){
 window.open('tickets', '_self')
}

export default function DashButton(props) {
    return (
        <div className='DashButton'>
            <button className={props.class} onClick = {ticketPage}>See Tickets</button>
        </div>
    )
}
