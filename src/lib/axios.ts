import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://brunojoice.ddns.net:3333'
});