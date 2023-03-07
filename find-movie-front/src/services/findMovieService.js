import axios from 'axios';

const BASE_URL = "http://localhost:5000";

export const getMovie = async (title) => {
  const response = await axios.get(`${BASE_URL}/movies/${title}`);

  return response.data;
}