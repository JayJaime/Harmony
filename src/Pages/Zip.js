import React from 'react'
import Header from '../Components/Header'
import '../Styles/Zip.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {useEffect, useState} from 'react'
import DashButton from '../Components/DashButton'

function dash() {
    window.open('Dashboard', '_self')
}

 document.body.classList.add('overflow-y')


export default function Landing() {
    const [className, setClassName] = useState('')
    
    useEffect(() => {
        setClassName('hidden')
        return 
    }, [])
    return (
        <div className='container'>
            <Header class = {className}/>
           <div className='imageContainer'>
                <h2 className='zipH2'>Almost there...</h2>
                <p className='zipP'>Before we can bring you face to face with your favorite artists, we’re going to need to know your location</p>
                <div className='zipInput'>
                    <FontAwesomeIcon className="searchZip" icon={['fas', 'search']} />
                    <input className='zipInpText' type='text' placeholder='City or Zip Code' />
                    <button onClick={dash}>Get Started</button>
                </div>
           </div>
        </div>
    )
}
