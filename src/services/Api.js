import axios from 'axios';

const DB_URI = process.env.REACT_APP_API_URL;

export default axios.create({
  baseURL: `${DB_URI}`,
});
