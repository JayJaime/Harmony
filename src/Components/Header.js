import React from 'react'
import '../Styles/Header.css'
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
                <div className={props.class}>
                    <div className='input' > <FontAwesomeIcon className="search" icon={['fas', 'search']} /><input type='text' placeholder='City or Zip Code' ></input></div>
                    <FontAwesomeIcon onClick={checkout} className="cart" icon={['fas', 'cart-arrow-down']} />
                    <p onClick={logout}>Logout</p>
                </div>
         </div>
    )
}
