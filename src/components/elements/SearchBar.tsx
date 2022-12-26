import styled from 'styled-components';
import { SearchIcon } from '../Icons/SearchIcon';

export default function SearchBar() {
  return (
    <Form>
      <InputBox placeholder="검색" autoFocus={true} width={300} height={40} />
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
