import React from 'react'
import '../Styles/Header2.css'
import { AiOutlineShoppingCart } from "react-icons/ai";
import styled from 'styled-components';



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
               < Cart onClick={checkout}/>
                    <p id='move'  onClick={logout}>Logout</p>
                </div>
         </div>
    )
}

const Cart = styled(AiOutlineShoppingCart)`

color: white;
  position: absolute;
  width: 20px;
  height: 18px;
  left: 1269px;
  top: 25px;

  opacity: 0.8;
  pointer-events: all;

    &:hover{
        cursor: pointer;
        color: rgb(219, 214, 214);
    }
`
