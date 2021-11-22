import React from 'react'
import '../Styles/Dashboard.css'
import Header from '../Components/Header'
import Event from '../Components/Event'
import Goer from '../Components/Goer'

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
    return (
        <div className='dashContainer'>
            <Header/>
            <div className='selectedArtist'></div>
            <div className='concertContainer'>
                <div className='concertCount'>
                    <h3>All Concert Events Near <span className='zip'>{zip}</span> {`(${concertCount})`}</h3>
                    <div className='dropdown'>
                        <label>Sort by: Date</label>
                        <select>Sort by: Date</select>
                    </div>
                </div>
                {placeholderAPI.map((event) => {
                    console.log(event)
                    return <Event artistPhoto = {event.artist_photo} month = {event.date.month} day = {event.date.day} weekDay = {event.date.weekDay} 
                    time = {event.date.time} name = {event.artist_name} venue = {event.location.venue} city = {event.location.city} state = {event.location.state} />
                })}

                <div className='goersContainer'>
                    <h3 className='title'>Concert goers near you</h3>
                    {placeHolderAPI2.map((event) => {
                        return <Goer photo = {event.goer_photo} name = {event.name} seeing = {event.seeing}/>
                    })}
                </div>
                
            </div>
        </div>
    )
}
