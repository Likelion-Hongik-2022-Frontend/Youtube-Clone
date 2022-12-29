import client from './client';
const API_KEY = process.env.REACT_APP_API_KEY;

export const getVideos = () => {
  return client
    .get(
      `https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&chart=mostPopular&maxResults=800&regionCode=KR&key=${API_KEY}`
    )
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
};

export const getSearchData = (inputWord: string) => {
  return client
    .get(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=800&q=${inputWord}&key=${API_KEY}`)
    .then((res) => {
      // console.log(res);
      return res.data;
    });
};
