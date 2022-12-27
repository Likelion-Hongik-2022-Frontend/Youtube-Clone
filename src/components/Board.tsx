import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Wrapper = styled.div`
	max-width: 347px;
`;

const Img = styled.img`
	background-color: transparent;
	object-fit: contain;
	width: 100%;
`;

const Container = styled.div`
	display: flex;
	margin-top: 0.5rem;
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
	font-size: 15px;
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

const Box = styled.div`
	margin-left: 0.5rem;
`;

function Board({ video }: any) {
	const [channelUrl, setChannelUrl] = useState();
	const id = video['id'];
	const title = video['snippet']['title'];
	const img_src = video['snippet']['thumbnails']['standard']['url'];
	const channelTitle = video['snippet']['channelTitle'];
	const channelId = video['snippet']['channelId'];
	useEffect(() => {
		axios.get(`https://www.googleapis.com/youtube/v3/channels?id=${channelId}&part=snippet&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`).then(function (response) {
			setChannelUrl(response.data.items[0].snippet.thumbnails.default.url);
		});
	}, []);
	console.log(channelUrl);
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

	let viewCount = video['statistics']['viewCount'];
	if (viewCount >= 10000) {
		viewCount = '조회수 ' + String(Math.round(viewCount / 10000)) + '만회';
	} else if (viewCount >= 1000) {
		viewCount = '조회수 ' + String(Math.round(viewCount / 1000)) + '천회';
	} else {
		viewCount = '조회수 ' + viewCount + '회';
	}
	return (
		<Wrapper>
			<Img src={img_src ? img_src : ''} />
			<Container>
				<ChannelImg src={channelUrl} />
				<Box>
					<Title>{title}</Title>
					<Desc>{channelTitle}</Desc>
					<Desc>
						{viewCount} • {dateStr}
					</Desc>
				</Box>
			</Container>
		</Wrapper>
	);
}

export default Board;
