import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 72px;
	background-color: ${(props) => props.theme.bgColor};
	display: flex;
	flex-direction: column;
	padding: 0 10px;
`;

const MenuBtn = styled.button`
	width: 100%;
	padding: 16px 0 14px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	border: none;
	cursor: pointer;
	background-color: transparent;
	img {
		width: 24px;
		height: 24px;
	}
	span {
		padding-top: 5px;
		font-size: 5px;
	}
`;

function NavBar() {
	return (
		<Wrapper>
			<MenuBtn>
				<img alt='tab' src={process.env.PUBLIC_URL + '/img/hamburger.png'} />
			</MenuBtn>
			<MenuBtn>
				<img alt='home' src={process.env.PUBLIC_URL + '/img/youtube_home.png'} />
				<span>홈</span>
			</MenuBtn>
			<MenuBtn>
				<img alt='shorts' src={process.env.PUBLIC_URL + '/img/youtube_shorts.png'} />
				<span>Shorts</span>
			</MenuBtn>
			<MenuBtn>
				<img alt='subscribe' src={process.env.PUBLIC_URL + '/img/youtube_subscribe.png'} />
				<span>구독</span>
			</MenuBtn>
			<MenuBtn>
				<img alt='originals' src={process.env.PUBLIC_URL + '/img/youtube_originals.png'} />
				<span>Originals</span>
			</MenuBtn>
			<MenuBtn>
				<img alt='music' src={process.env.PUBLIC_URL + '/img/youtube_music.png'} />
				<span>Youtube Music</span>
			</MenuBtn>
		</Wrapper>
	);
}

export default NavBar;
