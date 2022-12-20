import { getVideos } from '../api/getVideos';
import { useQuery } from '@tanstack/react-query';
import { Header } from '../components/elements/Header';

export function HomePage() {
  const { isLoading, data } = useQuery(['movies'], async () => {
    const movies = await getVideos();
    console.log(movies);
  });

  return (
    <>
      <Header />
    </>
  );
}
