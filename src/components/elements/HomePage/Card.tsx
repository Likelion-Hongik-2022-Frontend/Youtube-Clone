import styled from 'styled-components';
import { CardProps } from '../../../interface';
import { MoreIcon } from '../../Icons/MoreIcon';
import { Column, Row } from '../Wrapper';
export function Card({ thumbnailImageUrl, profileImageUrl, title, channelName, viewCount, time }: CardProps) {
  return (
    <Wrapper>
      <img src="https://i.ytimg.com/vi/vRUocR_wPVk/sddefault.jpg" alt="썸네일 이미지" />
      <Column>
        <InfoArea>
          <img src="https://i.ytimg.com/vi/vRUocR_wPVk/sddefault.jpg" alt="프로필 사진" />
          <TitleArea>hiaklsdjfklbj</TitleArea>
          <MoreIcon />
        </InfoArea>
        <ChannelName>name</ChannelName>
        <Row>
          <ViewInfo>조회수 17만회 &#183; 10분 전</ViewInfo>
        </Row>
      </Column>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 276px;
  height: 250px;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 155px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const InfoArea = styled.div`
  margin-top: 12px;
  display: flex;
  font-size: 1rem;
  gap: 12px;
  align-items: flex-start;

  img {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    /* align-items: center; */
    /* justify-content: center; */
    object-fit: cover;
  }
`;

const TitleArea = styled.div`
  width: 204px;
  height: 40px;
  font-weight: 500;
`;

const ChannelName = styled.div`
  margin-top: 6px;
  font-size: 0.8rem;
  padding-left: 48px;
  color: #606060;
`;

const ViewInfo = styled.div`
  font-size: 0.8rem;
  padding-left: 48px;
  color: #606060;

  span::before {
  }
`;
