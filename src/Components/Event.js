import React from 'react'
import '../Styles/Event.css'
import DashButton from './DashButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lineup from './Lineup'
import {useState} from 'react'

export default function Event(props) {
    
  
   
    let lineupPlaceholder = [
        {artist: '',
         artist_name: 'The Underachievers'},

         {artist: '',
         artist_name: 'Kali Uchis'},

         {artist: '',
         artist_name: 'Kendrick Lamar'},
    ]
         

    return (
       
        <div className='eventContainer'>
                    <div className='mainDropdownCont'>
                       <div className='eventInfoFlex'>
                            <div  className='eventInfo'>
                            <div className='dashDropdownArrow'><FontAwesomeIcon  icon={['fas', 'angle-down']}/></div>
                                <div className='over'>
                                    <div className='artistPhoto'>
                                         
                                        <img src = {props.artistPhoto} alt = ''></img>
                                     </div>
                                    <div className='date'>
                                <       h3 className='month'>{props.month + ' ' + props.day}</h3>
                                        <p className='day_time'>{props.weekDay + '⋅' + props.time}</p>
                                    </div>
                                    <div className='nameAndLocation'>
                                        <h3 className='name'>{props.name}</h3>
                                        <p className='location'>{props.venue + ' - ' + props.city + ', ' + props.state}</p>
                                    </div> 
                                 </div>
                                </div>
                            <DashButton class = 'eventButton'/> 
                       </div>
                       <div className='lineupContainer'>
                           <div className='lineupPosition'>
                               <p>Lineup</p>
                               {lineupPlaceholder.map((e) => {
                                   return <Lineup artist_photo = {e.artist} artist_name = {e.artist_name}/>
                               })}
                           </div>
                       </div>
                    </div>
                    {/* Dropdown content */}
                 
            
        </div>
    )
}
