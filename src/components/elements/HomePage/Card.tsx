import styled from 'styled-components';
import { CardProps } from '../../../interface';
import { MoreIcon } from '../../Icons/MoreIcon';
import { Column, Row } from '../Wrapper';
export function Card({ thumbnailImageUrl, profileImageUrl, title, channelName, viewCount, time }: CardProps) {
  return (
    <Wrapper>
      <img src={thumbnailImageUrl} alt="썸네일 이미지" />
      <Column>
        <InfoArea>
          <img src={profileImageUrl} alt="프로필 사진" />
          <TitleArea>{title}</TitleArea>
          <MoreIcon />
        </InfoArea>
        <ChannelName>{channelName}</ChannelName>
        <Row>
          <ViewInfo>
            {viewCount}회 &#183; {time}
          </ViewInfo>
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
  cursor: pointer;

  img {
    width: 100%;
    height: 155px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const InfoArea = styled.div`
  margin-top: 6px;
  display: flex;
  font-size: 0.9rem;
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
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ChannelName = styled.div`
  margin-top: 6px;
  font-size: 12px;
  padding-left: 48px;
  color: #606060;
`;

const ViewInfo = styled.div`
  font-size: 12px;
  padding-left: 48px;
  color: #606060;

  span::before {
  }
`;
