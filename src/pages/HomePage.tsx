import { getHomeMovies } from '../api/getVideos';

export function HomePage() {
  getHomeMovies();
  return <div>homePage</div>;
}
