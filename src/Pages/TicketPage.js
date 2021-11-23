import React from 'react'
import Header from '../Components/Header'
import '../Styles/TicketPage.css'
import Ticket from '../Components/Ticket'

export default function TicketPage() {
    let ticketPlaceholder = [
        {seat:{section:'Terrace', seat:'20A', row:'9'},
         price: '$125'
    }
    ]

    return (
        <div className='ticketPageContainer'>
            <Header/>
            <div className='map'>
                Stadium Map
            </div>
            <div className='ticketContentContainer'>
                <div className='artistTicketPage'>
                    <div className='tickArtistContent'>
                        <div className='tickArtistDateLocation'>
                            <div className='tickLocation'>
                                <h3>Kendrick Lamar</h3>
                                <p>Sunshine Theatre, Albuquerque, NM</p>
                            </div>
                            <div className='tickDate'>
                                <p>Friday ⋅ Nov 12, 2022 ⋅ 8:00PM</p>
                            </div>
                        </div>
                        <div className='tickArtistPhoto'></div>
                    </div>
                </div>
                <div className='ticketAmtContainer'></div>
                <div className='ticketContainer'>
                    {ticketPlaceholder.map((ticket) => {
                        return <Ticket price = {ticket.price} section = {ticket.seat.section} row = {ticket.seat.row} seat = {ticket.seat.seat}/>
                    })}
                </div>
            </div>
            
        </div>
    )
}
