import React from 'react'
import Header from '../Components/Header'
import myImage from "../images/Landing_Hero_Image_Edited.jpg"
import {useEffect, useState} from 'react'
import styled from 'styled-components'
import { FiSearch } from "react-icons/fi";


function dash() {
    window.open('Dashboard', '_self')
}

 document.body.classList.add('overflow-y')


export default function Landing() {
    const [className, setClassName] = useState('')
    
    useEffect(() => {
        setClassName('hidden')
        return 
    }, [])
    return (
        <ZipContainer>
            <Header class = {className}/>
           <ImageContainer>
                <ZipH2>Almost there...</ZipH2>
                <ZipP>Before we can bring you face to face with your favorite artists, we’re going to need to know your location</ZipP>
                <ZipInput>
                    <SearchIcon/>
                    <ZipInpText type='text' placeholder='City or Zip Code' />
                    <ZipButt onClick={dash}>Get Started</ZipButt>
                </ZipInput>
           </ImageContainer>
        </ZipContainer>
    )
}

const ZipContainer = styled.div`
 height: 100vh;
 width: 100vw;
`

const ImageContainer = styled.div`
  box-sizing: border-box;
  background-image: url(${myImage});
  background-size: cover;
  width: 100%;
  height: 100%;
  background-repeat: no-repeat;
`

const ZipH2 = styled.h2`
  position: absolute;
  width: 590px;
  height: 73px;
  left: 475px;
  top: 148px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 60px;
  line-height: 73px;
  text-align: center;
  letter-spacing: 0.01em;

  color: #ffffff;
`

const ZipP = styled.p`
  position: absolute;
  width: 590px;
  height: 60px;
  left: 475px;
  top: 237px;

  font-family: Montserrat;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 30px;
  /* or 167% */

  text-align: center;
  letter-spacing: 0.02em;

  color: #ffffff;

  opacity: 0.7;
`

const ZipInput = styled.div`
display: flex;
  flex-direction: row;

  align-items: center;
  padding: 16px 16px 16px 24px;

  position: absolute;
  width: 423px;
  height: 84px;
  left: 558px;
  top: 345px;

  /* white */

  background: #ffffff;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-sizing: border-box;
  /* light-shadow */

  box-shadow: 0px 4px 32px rgba(60, 69, 76, 0.12);
  border-radius: 50px;
`

const ZipInpText = styled.input`
font-family: "Montserrat";
  letter-spacing: 1px;
  border: none;
  width: 175px;
  outline: none;
  font-size: 18px;
  transform: translateX(0px);
`

const ZipButt = styled.button`
display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  font-family: 'Montserrat';

  position: absolute;
  width: 160px;
  height: 52px;
  right: 0px;
  font-size: 18px;
  font-weight: bold;
  transform: translateX(-10px);

  top: 14px;

  color: white;
  background: #1db954;
  border: none;
  /* light-shadow */

  box-shadow: 0px 4px 32px rgba(60, 69, 76, 0.12);
  border-radius: 30px;

  /* Inside Auto Layout */

  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0px 10px;

  &:hover {
    background-color: #1db954;
  opacity: 0.9;
  cursor: pointer;
  color: white;
  }
`
const SearchIcon = styled(FiSearch)`
  color: #000000;
  font-size: 24px;
  margin-left: 4px;
`
