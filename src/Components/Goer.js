import React from 'react'
import '../Styles/Goers.css'

export default function Goer(props) {
    return (
        <div className='goer'>
            <div className = 'photo'>
                
            </div>
            <div className='goerInfo'>
                <h3 className='nameGoer'>{props.nameGoer}</h3>
                <p className='seeing'>{props.seeing}</p>
            </div>
        </div>
    )
}
