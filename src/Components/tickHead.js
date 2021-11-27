import React from 'react'
import '../Styles/tickHead.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


export default function Header(props) {
    function logout(){
        window.open('Login', '_self')
    }

    function checkout(){
        window.open('PaymentPage', '_self')
    }


    return (
        <div className='header2'>
                <div className={props.class}>
                    <FontAwesomeIcon onClick={checkout} className="cart2" icon={['fas', 'cart-arrow-down']} />
                    <p  onClick={logout}>Logout</p>
                </div>
         </div>
    )
}
