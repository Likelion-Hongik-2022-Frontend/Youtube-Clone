import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Board from './components/Board';
import NavBar from './components/NavBar';

const Container = styled.div`
	display: flex;
	width: 100%;
`;

const Wrapper = styled.div`
	display: flex;
	align-items: center;
`;

const Logo = styled.div`
	padding: 18px 14px 18px 16px;
	color: ${(props) => props.theme.textColor};
	margin-right: 250px;
	img {
		width: 100px;
	}
	display: flex;
	align-items: center;
	text-align: center;
`;

const Search = styled.form`
	width: 600px;
	height: 40px;
	border: 1.2px solid ${(props) => props.theme.borderColor};
	border-radius: 50px;
	display: flex;
	align-items: center;
	padding-left: 15px;
	justify-content: space-between;
	input {
		width: 500px;
		font-size: 15px;
		color: ${(props) => props.theme.textColor};
		border: none;
		overflow-x: scroll;
	}
	input:focus {
		outline: none;
	}
	button {
		height: 40px;
		width: 60px;
		border: 1.2px solid ${(props) => props.theme.borderColor};
		border-top-right-radius: 50px;
		border-bottom-right-radius: 50px;
		background-color: ${(props) => props.theme.badgeColor};
		cursor: pointer;
		img {
			width: 15px;
		}
	}
`;

const Tag = styled.div`
	height: 50px;
	border-top: 1.2px solid ${(props) => props.theme.borderColor};
	border-bottom: 1.2px solid ${(props) => props.theme.borderColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

const TagBtn = styled.button`
	height: 30px;
	padding: 0 13px;
	border-radius: 50px;
	background-color: ${(props) => props.theme.badgeColor};
	border: 1.2px solid ${(props) => props.theme.borderColor};
	margin-right: 15px;
	cursor: pointer;
	&:hover {
		background-color: ${(props) => props.theme.textColor};
		color: ${(props) => props.theme.bgColor};
	}
`;

const Content = styled.div`
	background-color: ${(props) => props.theme.contentBgColor};
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	padding: 20px 0px;
`;

function App() {
	const tag_arr = ['전체', '음악', '게임', '믹스', '실시간'];
	const [video_arr, setVideoArr] = useState<any[]>([]);

	useEffect(() => {
		axios
			.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=50&regionCode=KR&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`)
			.then(function (response) {
				setVideoArr(response.data.items);
			});
	}, []);

	return (
		<Container>
			<NavBar></NavBar>
			<div>
				<Wrapper>
					<Logo>
						<img alt='logo' src={process.env.PUBLIC_URL + '/img/logo_light.png'} />
					</Logo>
					<Search>
						<input type='text' placeholder='검색' />
						<button type='submit'>
							<img src={process.env.PUBLIC_URL + '/img/search.png'} />
						</button>
					</Search>
				</Wrapper>
				<Tag>
					{Object.keys(tag_arr).map((i) => (
						<TagBtn key={i}>{tag_arr[parseInt(i)]}</TagBtn>
					))}
				</Tag>
				<Content>
					{Object.keys(video_arr).map((i) => (
						<Board key={i} video={video_arr[parseInt(i)]}></Board>
					))}
				</Content>
			</div>
		</Container>
	);
}
export default App;
