import { getVideos } from '../api/getVideos';
import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';
import { Card } from '../components/elements/HomePage/Card';
import { Section } from '../components/elements/Wrapper';
import { useState } from 'react';
import { IVideos } from '../interface';

/* thumbnailImageUrl, profileImageUrl, title, channelName, viewCount, time */

export function HomePage() {
  const { isLoading: isVideoLoading, data: videoData } = useQuery<any, any>(['videos'], getVideos);
  const [videoList, setVideoList] = useState<any>([]);

  console.log(isVideoLoading, videoData);
  // if (isVideoLoading) {
  //   setVideoList(videoData);
  // }

  return (
    <>
      <Header />
      <Section>
        {/* {isVideoLoading ??
          videoData.map((video) => {
            return (
              <Card
                thumbnailImageUrl={video}
                profileImageUrl={video}
                title={video}
                channelName={video}
                viewCount={video}
                time={video}
              />
            );
          })} */}
      </Section>
    </>
  );
}
