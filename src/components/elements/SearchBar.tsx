import styled from 'styled-components';

export default function SearchBar() {
  return (
    <form style={{ marginLeft: '220px' }}>
      <InputBox placeholder="검색" width={300} height={40} />
    </form>
  );
}

const InputBox = styled.input`
  width: 520px;
  height: 40px;
  background-color: white;
  border-radius: 20px;
  border: 1px solid #dcdcdc;
  padding-left: 20px;
  font-size: 16px;
`;
