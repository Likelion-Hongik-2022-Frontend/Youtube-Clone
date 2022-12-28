import { getVideos } from '../api/getVideos';
import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import { Card } from '../components/elements/HomePage/Card';
import { Section } from '../components/elements/Wrapper';
import { useState } from 'react';
import { IVideos } from '../interface';
import styled from 'styled-components';

/* thumbnailImageUrl, profileImageUrl, title, channelName, viewCount, time */

export function HomePage() {
  const { isLoading: isVideoLoading, data: videoData } = useQuery<any, any>(['videos'], getVideos);
  // const videoItems = videoData?.items;
  const time = Date.now();
  // console.log(time);
  console.log(videoData?.items[0].snippet.publishedAt);

  return (
    <>
      <Header />
      <Section>
        <ContentsWrapper>
          {videoData?.items.map((item: any) => {
            console.log(item);

            return (
              <Card
                key={item.id}
                thumbnailImageUrl={item.snippet.thumbnails.standard.url}
                profileImageUrl={item.snippet.thumbnails.standard.url}
                title={item.snippet.title}
                channelName={item.snippet.channelTitle}
                viewCount={item.statistics.viewCount}
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