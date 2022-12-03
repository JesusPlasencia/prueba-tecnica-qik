import axios from 'axios';

const API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0324710d161b52b1ea03017e02838c18',
    language: 'es-ES',
  },
});

export default API;
