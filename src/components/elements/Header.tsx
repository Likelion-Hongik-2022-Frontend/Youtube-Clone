import styled from 'styled-components';
import Logo from '../Icons/Logo';
import MenuIcon from '../Icons/MenuIcon';
import SearchBar from './SearchBar';

export function Header() {
  return (
    <Wrapper>
      <MenuIcon />
      <Logo />
      <SearchBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 60px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  position: fixed;
  top: 0;
  padding: 16px;
  z-index: 1;
  /* background-color: #dcdcdc; */
`;
