import React from 'react'
import '../Styles/Login.css'
import Header from '../Components/Header'

function Dashboard(){
    window.open('Dashboard', '_self')
}

export default function Login() {
    return (<div className="loginBody">
        <Header/>
        <div className='loginContainer'>
            <h2 className='loginTitle'> Sign in to your <span>Spotify</span> account.</h2>
            
                <label className='label1'>Email</label>
                <input type='email' className='email'></input>

                <label className='label2'>Password</label>
                <input type='password' className='password'></input>

                <button onClick={Dashboard} className='loginButton'>Get started</button>
            
        </div>
        </div>
    )
}
