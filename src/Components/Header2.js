import React from 'react'
import '../Styles/Header2.css'
import { AiOutlineShoppingCart } from "react-icons/ai";



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
                    <AiOutlineShoppingCart onClick={checkout} className='cart2'  />
                    <p id='move'  onClick={logout}>Logout</p>
                </div>
         </div>
    )
}
