import React from "react";
import Header from "../Components/Header";
import styled from "styled-components";
import myImage from "../images/Landing_Hero_Image_Edited.jpg";
import { BsSpotify } from "react-icons/bs";
import {
	authEndpoint,
	clientId,
	redirectUri,
	scopes,
} from "../Components/config_example";

import { useEffect, useState } from "react";

// function Login() {
// 	window.open("Login", "_self");
// }

document.body.classList.add("overflow-y");

export default function Landing() {
	const [className, setClassName] = useState("");

	useEffect(() => {
		setClassName("hidden");
		return;
	}, []);
	return (
		<Container>
			<Header class={className} />
			<ImageContainer>
				<DashTitle>See your favorite artists in concert</DashTitle>
				<DashContent>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus leo
					lectus mauris accumsan turpis.
				</DashContent>

				{!this.state.token && (
					<a
						className="btn btn--loginApp-link"
						href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
							"%20"
						)}&response_type=token&show_dialog=true`}
					>
						<LandingButt>
							Sign in with Spotify <SpotifyIcon />{" "}
						</LandingButt>
					</a>
				)}
			</ImageContainer>
		</Container>
	);
}

let Container = styled.div`
	height: 100vh;
	width: 100vw;
`;

let ImageContainer = styled.div`
	box-sizing: border-box;
	background-image: url(${myImage});
	background-size: cover;
	width: 100%;
	height: 100%;
	background-repeat: no-repeat;
`;

const DashTitle = styled.h2`
	position: absolute;
	width: 590px;
	height: 146px;
	left: 50%;
	transform: translateX(-50%);
	top: 148px;

	font-family: Montserrat;
	font-style: normal;
	font-weight: bold;
	font-size: 60px;
	line-height: 73px;
	text-align: center;
	letter-spacing: 0.01em;

	color: #ffffff;
`;

const DashContent = styled.p`
	position: absolute;
	width: 590px;
	height: 60px;
	left: 50%;
	transform: translateX(-50%);
	top: 310px;

	font-family: Montserrat;
	font-style: normal;
	font-weight: 500;
	font-size: 18px;
	line-height: 30px;
	/* or 167% */

	text-align: center;
	letter-spacing: 0.02em;

	color: #ffffff;
`;

const LandingButt = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	padding: 26px 10px;

	position: absolute;
	width: 241px;
	height: 52px;
	left: 50%;
	transform: translateX(-50%);
	top: 418px;

	border: 2px solid #1db954;
	box-sizing: border-box;
	background: none;
	color: #1db954;
	font-weight: bold;
	font-size: 18px;
	letter-spacing: 1px;
	/* light-shadow */

	filter: drop-shadow(0px 4px 32px rgba(60, 69, 76, 0.12));
	border-radius: 30px;

	&:hover {
		background-color: #1db954;
		color: #000000;
		cursor: pointer;
	}
`;

const SpotifyIcon = styled(BsSpotify)`
	transform: translateX(5px);
	font-size: 20px;
`;
