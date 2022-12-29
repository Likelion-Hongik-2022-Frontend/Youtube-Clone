import { useQuery } from '@tanstack/react-query';
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { getSearchData } from '../api/getVideos';
import { Header } from '../components/elements/Header';
import { Card } from '../components/elements/HomePage/Card';
import { Section } from '../components/elements/Wrapper';
import { searchWordState } from '../states';

export function SearchPage() {
  const searchWord = useRecoilValue(searchWordState);
  const { isLoading: isSearchedVideoLoading, data: searchedVideoData } = useQuery<any, any>(['searchedVideo'], () =>
    getSearchData('a')
  );

  console.log(searchedVideoData);

  return (
    <>
      <Header />
      <Section>
        <ContentsWrapper>
          {searchedVideoData?.items.map((item: any) => {
            return (
              <Card
                key={item.id.videoId}
                thumbnailImageUrl={item.snippet.thumbnails.medium.url}
                profileImageUrl={item.snippet.thumbnails.medium.url}
                title={item.snippet.title}
                channelName={item.snippet.channelTitle}
                // viewCount={item.statistics.viewCount}
                time={item.snippet.publishedAt}
              />
            );
          })}
        </ContentsWrapper>
      </Section>
    </>
  );
}

const ContentsWrapper = styled.div`
  display: grid;
  grid-template-columns: 280px 280px 280px auto;
  gap: 16px;
  margin-left: 40px;
  /* background-color: aliceblue ; */
  justify-content: center;
  align-items: center;
`;
