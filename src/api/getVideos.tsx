import client from './client';
const API_KEY = process.env.REACT_APP_API_KEY;

// export async function getVideos() {
//   const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=800&key=${API_KEY}`;
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       // console.log(data);

//       return data;
//     });
// }

export const getVideos = () => {
  return client.get(`videos?part=snippet&chart=mostPopular&maxResults=800&key=${API_KEY}`).then((res) => {
    // console.log(res.data);
    return res.data;
  });
};
