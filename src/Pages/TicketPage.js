import React from 'react'
import Header2 from '../Components/Header2'
import '../Styles/TicketPage.css'
import Ticket from '../Components/Ticket'
import Tickets from '../Components/Tickets'

export default function TicketPage() {

    document.body.classList.add('overflow-x')
    document.body.classList.remove('overflow-y')

    let ticketPlaceholder = [
        {seat:{section:'Terrace', seat:'20A', row:'9'},
         price: '$125.00'
    },
    {seat:{section:'Terrace', seat:'20A', row:'9'},
    price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
},
{seat:{section:'Terrace', seat:'20A', row:'9'},
price: '$125.00'
}
    ]

   function tickDrop() {
      let drop =  document.querySelector('.dropdownTicks')
      drop.classList.add('dropdownTicksActive')
      drop.classList.remove('dropdownTicks')
       console.log(drop)
   } 

    return (
        <div className='ticketPageContainer'>
            <Header2 />
            <div className='map'>
                Stadium Map
            </div>
            <div className='ticketContentContainer'>
                <div className='tickFixed'>
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
                   <div className ='dropdownContTick'>
                        <div onClick = {tickDrop}className='ticketDropdown'>
                                1 Ticket
                            </div>
                            <div className='dropdownTicks'>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                                <Tickets/>
                            </div>
                   </div>
                </div>
                <div className='ticketSelectionContainer'>
                   
                            <div className='ticketContainer' >
                               
                                    {ticketPlaceholder.map((ticket) => {
                                        return <Ticket price = {ticket.price} section = {ticket.seat.section} row = {ticket.seat.row} seat = {ticket.seat.seat}/>
                                    })}
                                    
                    
                            </div>
                     
                </div>
            </div>
            
        </div>
    )
}
