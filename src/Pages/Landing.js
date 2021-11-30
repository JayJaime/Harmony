 import React from 'react'
import Header from '../Components/Header'
import '../Styles/Landing.css'

import {useEffect, useState} from 'react'


function Login() {
    window.open('Login', '_self')
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
                <h2>See your favorite artists in concert</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus leo lectus mauris accumsan turpis.</p>
                <button className='landingButt' onClick={Login}>Sign in with Spotify  </button>
                <input type='text'/>
           </div>
        </div>
    )
}
