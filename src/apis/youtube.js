import axios from "axios";

const KEY = "AIzaSyANaknPM-UnRVomZT9U-5QbQ1hnPXxGdaI";

const youtube = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 7,
    key: KEY
  }
});

export default youtube;
