import React from 'react'
import '../Styles/Login.css'
import Header from '../Components/Header'
import {useEffect, useState} from 'react'

function Zip(){
    window.open('Zip', '_self')
}

document.body.classList.add('overflow-y')

export default function Login() {
    const [className, setClassName] = useState('')
    
    useEffect(() => {
        setClassName('hidden')
        return 
    }, [])

    return (<div className="loginBody">
        <Header class = {className}/>
        <div className='loginContainer'>
            <h2 className='loginTitle'> Sign in to your <span>Spotify</span> account.</h2>
            
                <label className='label1'>Email</label>
                <input type='email' className='email'></input>

                <label className='label2'>Password</label>
                <input type='password' className='password'></input>

                <button onClick={Zip} className='loginButton'>Get started</button>
            
        </div>
        </div>
    )
}
