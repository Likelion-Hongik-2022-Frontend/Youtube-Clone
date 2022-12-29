import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
	width: 100%;
	display: flex;
`;

const Img = styled.img`
	background-color: transparent;
	object-fit: contain;
	max-width: 361px;
`;

const Container = styled.div`
	display: flex;
	margin-top: 0.5rem;
	flex-direction: column;
	gap: 10px;
	margin-left: 0.5rem;
`;

const ChannelImg = styled.img`
	width: 2rem;
	height: 2rem;
	border-radius: 100%;
	object-fit: cover;
`;

const Title = styled.h1`
	color: ${(props) => props.theme.textColor};
	font-family: 'Roboto', 'Arial', sans-serif;
	font-size: 18px;
	line-height: 20px;
	font-weight: 500;
	max-height: 4.4rem;
	overflow: hidden;
	display: block;
	-webkit-line-clamp: 2;
	display: box;
	display: -webkit-box;
	-webkit-box-orient: vertical;
	text-overflow: ellipsis;
	white-space: normal;
	margin-bottom: 0.5rem;
`;

const Desc = styled.p`
	text-decoration: none;
	cursor: pointer;
	font-size: 12px;
	color: ${(props) => props.theme.endPointColor};
	font-family: 'Roboto', 'Arial', sans-serif;
	margin-top: 5px;
`;

function SearchBoard({ video }: any) {
	const [channelUrl, setChannelUrl] = useState();
	const title = video['snippet']['title'];
	const desc = video['snippet']['description'];
	const img_src = video['snippet']['thumbnails']['high']['url'];
	const channelTitle = video['snippet']['channelTitle'];
	const channelId = video['snippet']['channelId'];
	useEffect(() => {
		axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then(function (response) {
			setChannelUrl(response.data.items[0].snippet.thumbnails.default.url);
		});
	}, []);

	const date = new Date(video['snippet']['publishedAt']);
	const today = new Date();
	const diffDate = today.getTime() - date.getTime();
	let dateStr = '';
	if (diffDate > 1000 * 60 * 60 * 24 * 365) {
		dateStr = String(Math.floor(diffDate / (1000 * 60 * 60 * 24 * 365))) + '년 전';
	} else if (diffDate > 1000 * 60 * 60 * 24 * 30) {
		dateStr = String(Math.floor(diffDate / (1000 * 60 * 60 * 24 * 30))) + '개월 전';
	} else if (diffDate > 1000 * 60 * 60 * 24) {
		dateStr = String(Math.floor(diffDate / (1000 * 60 * 60 * 24))) + '일 전';
	} else if (diffDate > 1000 * 60 * 60) {
		dateStr = String(Math.floor(diffDate / (1000 * 60 * 60))) + '시간 전';
	} else {
		dateStr = String(Math.floor(diffDate / (1000 * 60))) + '분 전';
	}

	return (
		<Wrapper>
			<Img src={img_src ? img_src : ''} />
			<Container>
				<div>
					<Title>{title}</Title>
					<Desc>{channelTitle}</Desc>
					<Desc>{dateStr}</Desc>
				</div>
				<ChannelImg src={channelUrl} />
				<Desc>{desc}</Desc>
			</Container>
		</Wrapper>
	);
}

export default SearchBoard;
