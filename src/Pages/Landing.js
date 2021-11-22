 import React from 'react'
import Header from '../Components/Header'
import '../Styles/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Login() {
    window.open('Login', '_self')
}

export default function Landing() {
    return (
        <div className='container'>
            <Header/>
           <div className='imageContainer'>
                <h2>See your favorite artists in concert</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus leo lectus mauris accumsan turpis.</p>
                <button onClick={Login}>Sign in with Spotify <FontAwesomeIcon className="icon" icon={['fab', 'spotify']} /> </button>
           </div>
        </div>
    )
}
