import axios from 'axios';

export const APIKey = import.meta.env.VITE_API_KEY;
export const APIUrl = import.meta.env.VITE_API_URL;
export const posterURL = 'https://image.tmdb.org/t/p/original';

export const API = axios.create({
  baseURL: APIUrl,
});
