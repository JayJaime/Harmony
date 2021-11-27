import React from 'react'
import '../Styles/Header2.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
                    <FontAwesomeIcon onClick={checkout} className="cart" icon={['fas', 'cart-arrow-down']} />
                    <p id='move'  onClick={logout}>Logout</p>
                </div>
         </div>
    )
}
