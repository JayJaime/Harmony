import React from 'react'
import '../Styles/Header2.css'



export default function Header(props) {
    function logout(){
        window.open('Login', '_self')
    }

    function checkout(){
        window.open('PaymentPage', '_self')
    }


    return (
        <div className='header'>
                <div className={props.class} >
                    
                    <p id='move'  onClick={logout}>Logout</p>
                </div>
         </div>
    )
}
