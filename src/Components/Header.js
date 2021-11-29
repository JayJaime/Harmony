import React from 'react'
import '../Styles/Header.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsSearch } from "react-icons/bs";


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
                    <div id={props.id} className='input' > <BsSearch className="search"  /><input type='text' placeholder='City or Zip Code' ></input></div>
                    <AiOutlineShoppingCart onClick={checkout} className='cart'  />
                    <p  onClick={logout}>Logout</p>
                </div>
         </div>
    )
}
