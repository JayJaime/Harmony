import React from 'react'
import '../Styles/Ticket.css'
import DashButton from '../Components/DashButton'
import styled from 'styled-components'
// import {useEffect} from 'react'

export default function Ticket(props) {
        //  let tickButt = document.querySelector('.tickButton')
         
        //   tickButt.innerHTML = 'Add to cart'
         
    
    return (
        <TicketDiv>
            <TicketSeat>Sec {props.section} {props.seat}, Row {props.row}</TicketSeat>
            <TicketPrice>{props.price}</TicketPrice>
            <TickButton>Add to cart</TickButton>
        </TicketDiv>
    )
}

const TicketDiv = styled.div`
 /* transform: translateY(100px); */
 font-family: "Montserrat";
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0px;
  padding-left: 24px;
  margin-bottom: 20px;
  box-sizing: border-box;
  width: 614px;
  /* height: 65px; */
  z-index: -1;
  background: #ffffff;
`

const TicketSeat = styled.p`
font-size: 20px;
`

const TicketPrice = styled.p`
font-size: 20px;
  color: #2d9cdb;
`

const TickButton = styled.button`
 position: relative;
  bottom: 0px;
  left: -20px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* padding: 12px 24px; */
  cursor: pointer;

  /* position: relative; */
  width: 134px;
  height: 41px;
  color: #1db954;
  font-weight: 600;
  font-size: 14px;
  /* left: 768px;
  top: 830px; */

  /* Primary */
  background: none;

  border: 2px solid #1db954;
  box-sizing: border-box;
  font-family: "Montserrat";
  /* light-shadow */

  filter: drop-shadow(0px 4px 32px rgba(60, 69, 76, 0.12));
  border-radius: 30px;

  &:hover{
      color:white;
      background-color: #1db954;
  }
`