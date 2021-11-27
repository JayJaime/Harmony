import React from 'react'
import '../Styles/Event.css'
import DashButton from './DashButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Lineup from './Lineup'
import {useState} from 'react'

export default function Event(props) {
    let lineup = document.querySelectorAll('.eventInfo')
    let lineupArr = Array.from(lineup)
    const [boolean, setBoolean] = useState('false')
    
    

    for (let i = 0; i < lineupArr.length; i++ ){
     lineupArr[i].addEventListener('click', (e) => {
        let mainDropdown = e.target.parentElement
        let lineUpCont = e.target.parentElement.parentElement.children[1]
        // let booleanVar = boolean
        
         if(mainDropdown.parentElement.classList.value === 'mainDropdownCont'){ 
             console.log(e.target) 
         
         mainDropdown.parentElement.classList.add('mainDropdownContActive')
         mainDropdown.parentElement.classList.remove('mainDropdownCont')
         lineUpCont.classList.remove('lineupContainer')
         e.target.classList.add('eventInfoActive')
         e.target.classList.remove('eventInfo')
         setBoolean('true')
         console.log(boolean)
         
        }
        
        // else if(booleanVar === 'false'){
        //     console.log('dont')
        //     console.log(boolean)
        // let active = document.querySelector('.mainDropdownContActive')
        // active.addEventListener('click', (e) => {
        //    e.currentTarget.classList.add('mainDropdownCont')
        //    e.currentTarget.classList.remove('mainDropdownContActive')
        //    lineUpCont.classList.add('lineupContainer')
        // })}

      })
     
    }
   
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
