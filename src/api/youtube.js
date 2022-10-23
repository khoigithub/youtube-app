import axios from 'axios';

const KEY = "AIzaSyBJO3QP7IX-2SAwqVScEAJvx6d3n31CKfg";

export default axios.create({
    baseURL: "https://www.googleapis.com/youtube/v3",
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 25,
        key: KEY
    }
});