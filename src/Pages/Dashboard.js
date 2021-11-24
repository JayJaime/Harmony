import React from 'react'
import '../Styles/Dashboard.css'
import Header from '../Components/Header'
import Event from '../Components/Event'
import Goer from '../Components/Goer'
import DashButton from '../Components/DashButton'


import {useEffect, useState} from 'react'

// let dropDown = document.querySelector('.eventInfo')
// dropDown.addEventListener('click', () => {
//     document.querySelector('.dropDownMenu').style.opacity = '1'
// })

let zip = '00000';
let concertCount = '0'

//delete this and replace with the fetched json array
let placeholderAPI = [
    {artist_photo:'', 
     date: {month:'Nov', day:'12', weekDay:'Friday', time:'8:00 PM'},
     artist_name:'Isaiah Rashad',
     location:{venue:'Sunshine Theatre', state:'NM', city:'Albuquerue'} },

     {artist_photo:'', 
     date: {month:'Nov', day:'12', weekDay:'Friday', time:'8:00 PM'},
     artist_name:'JID',
     location:{venue:'Sunshine Theatre', state:'NM', city:'Albuquerue'} },

     {artist_photo:'', 
     date: {month:'Nov', day:'12', weekDay:'Friday', time:'8:00 PM'},
     artist_name:'The Fixx',
     location:{venue:'Sunshine Theatre', state:'NM', city:'Albuquerue'} },

     {artist_photo:'', 
     date: {month:'Nov', day:'12', weekDay:'Friday', time:'8:00 PM'},
     artist_name:'Kendrick Lamar',
     location:{venue:'Sunshine Theatre', state:'NM', city:'Albuquerue'} }
]

let placeHolderAPI2 = [
    {goer_photo:'', 
     name:'Jenny K', 
     seeing:'Seeing Kendrick Lamar'},
     
     {goer_photo:'', 
     name:'Jenny K', 
     seeing:'Seeing Kendrick Lamar'},

     {goer_photo:'', 
     name:'Jenny K', 
     seeing:'Seeing Kendrick Lamar'},

     {goer_photo:'', 
     name:'Jenny K', 
     seeing:'Seeing Kendrick Lamar'}
]




export default function Dashboard() {
    const [className, setClassName] = useState('')
    
    useEffect(() => {
        document.body.classList.remove('overflow-y')
        document.body.classList.add('overflow-x')
        setClassName('searchAndFilter')
        return 
    }, [])
    
    return (
        <div className='dashContainer'>
            <Header class = {className}/>
            <div className='topArtist'>
                <div className='topArtistContent'>
                    <h3 className='date'>{placeholderAPI[0].date.weekDay + ' ' + placeholderAPI[0].date.month + ' ' + placeholderAPI[0].date.day}</h3>
                    <h1 className='artistName'>{placeholderAPI[0].artist_name}</h1>
                    <h3 className='locationTop'>{placeholderAPI[0].location.venue + ' - ' + placeholderAPI[0].location.city + ', ' + placeholderAPI[0].location.state}</h3>
                    <DashButton id='topButton'/>
                </div>
            </div>
            <div className='concertContainer'>
                <div className='concertCount'>
                    <h3>All Concert Events Near <span className='zip'>{zip}</span> {`(${concertCount})`}</h3>
                    <div className='dropdown'>
                        <label>Sort by: Date</label>
                        <select></select>
                    </div>
                </div>
               
                    {placeholderAPI.map((event) => {
                        console.log(event)
                        return <div className='dashDropdown'>
                                    <Event artistPhoto = {event.artist_photo} month = {event.date.month} day = {event.date.day} weekDay = {event.date.weekDay} 
                                     time = {event.date.time} name = {event.artist_name} venue = {event.location.venue} city = {event.location.city} state = {event.location.state} />
                                    <div className='dashDropdownMenu'>
                                         Dropdown content
                                    </div>
                                </div>
                        
                    })}
               

                <div className='goersContainer'>
                    <h3 className='title'>Concert goers near you</h3>
                    {placeHolderAPI2.map((event) => {
                        return <Goer photo = {event.goer_photo} nameGoer = {event.name} seeing = {event.seeing}/>
                    })}
                </div>
                
            </div>
            
        </div>
    )
}
