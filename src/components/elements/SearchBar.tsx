import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';
import useInput from '../../hooks/useInput';
import { searchWordState } from '../../states';
import { SearchIcon } from '../Icons/SearchIcon';

export default function SearchBar() {
  const navigate = useNavigate();
  const search = useInput('');
  const setSearchWord = useSetRecoilState(searchWordState);

  useEffect(() => {
    setSearchWord(search.value);
  }, [search.value]);

  const onEnter = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.keyCode === 13) {
      navigate('/search');
    }
  };

  return (
    <Form>
      <InputBox placeholder="검색" autoFocus={true} width={300} height={40} {...search} onKeyDown={onEnter} />
      <SearchIcon className="search-icon" />
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-left: 220px;
  position: relative;

  & .search-icon {
    position: absolute;
    right: 12px;
  }
`;

const InputBox = styled.input`
  width: 520px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  padding-left: 20px;
  font-size: 16px;
`;
