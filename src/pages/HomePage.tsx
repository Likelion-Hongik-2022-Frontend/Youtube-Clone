import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Board from '../components/Board';
import NavBar from '../components/NavBar';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Container = styled.div`
	display: flex;
	width: 100%;
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

function HomePage() {
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
			<div style={{ width: '100%' }}>
				<Header></Header>
				<div>
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
			</div>
		</Container>
	);
}
export default HomePage;
