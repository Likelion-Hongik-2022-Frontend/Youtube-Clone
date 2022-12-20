import axios from 'axios';

const baseURL = 'https://www.googleapis.com/youtube/v3/';

const client = axios.create({
  baseURL,
});

export default client;
