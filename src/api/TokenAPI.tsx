import axios from 'axios';

const TOKEN_API = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: '0324710d161b52b1ea03017e02838c18',
    language: 'es-ES',
    session_id: '47991fd4e7f91941553d03464a2b1659dc065393',
  },
});

export default TOKEN_API;
