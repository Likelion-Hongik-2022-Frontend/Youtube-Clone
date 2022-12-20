import styled from 'styled-components';
import Logo from '../Icons/Logo';
import Menu from '../Icons/Menu';
import SearchBar from './SearchBar';

export function Header() {
  return (
    <Wrapper>
      <Menu />
      <Logo />
      <SearchBar />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100vw;
  height: 56px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  position: fixed;
  top: 0;
  padding: 16px;
  z-index: 1;
  /* background-color: #dcdcdc; */
`;
