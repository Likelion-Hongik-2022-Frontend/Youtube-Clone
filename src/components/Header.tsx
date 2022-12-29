import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
function Header() {
	const [search, setSearch] = useState('');

	const handleSearch = (e: any) => {
		setSearch(e.target.value);
	};
	return (
		<Wrapper>
			<Link to='/'>
				<Logo>
					<img alt='logo' src={process.env.PUBLIC_URL + '/img/logo_light.png'} />
				</Logo>
			</Link>
			<Search>
				<input type='text' placeholder='검색' onChange={handleSearch} />
				<Link to='/search' state={{ search: search }}>
					<button type='submit'>
						<img alt='search_icon' src={process.env.PUBLIC_URL + '/img/search.png'} />
					</button>
				</Link>
			</Search>
		</Wrapper>
	);
}
export default Header;
