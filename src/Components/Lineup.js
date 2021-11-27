import React from 'react'
import '../Styles/Lineup.css'

export default function Lineup(props) {
    return (
        <div className='Lineup'>
            <div className='lineupArtistPhoto'>
                <img src={props.artist_photo} alt=''></img>
            </div>
            <div className= 'lineupArtistName'>{props.artist_name}</div>
        </div>
    )
}
