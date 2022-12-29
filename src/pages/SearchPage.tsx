import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { useState, useEffect } from 'react';
import NavBar from '../components/NavBar';
import { Link, useLocation } from 'react-router-dom';
import SearchBoard from '../components/SearchBoard';
import Header from '../components/Header';

const Container = styled.div`
	display: flex;
	width: 100%;
`;

const Content = styled.div`
	background-color: ${(props) => props.theme.contentBgColor};
	display: flex;
	flex-wrap: wrap;
	gap: 10px;
	justify-content: center;
	padding: 20px 0px;
`;

function SearchPage() {
	const { state } = useLocation();
	const [video_arr, setVideoArr] = useState<any[]>([]);
	const q = state.search;

	useEffect(() => {
		axios.get(`https://www.googleapis.com/youtube/v3/search?q=${q}&part=snippet&maxResults=50&regionCode=KR&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then(function (response) {
			setVideoArr(response.data.items);
		});
	}, []);
	return (
		<Container>
			<NavBar></NavBar>
			<div>
				<Header></Header>
				<div style={{ width: '100%' }}>
					<Content>
						{Object.keys(video_arr).map((i) => (
							<SearchBoard key={i} video={video_arr[parseInt(i)]}></SearchBoard>
						))}
					</Content>
				</div>
			</div>
		</Container>
	);
}

export default SearchPage;
