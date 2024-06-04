import axios from 'axios';
import { apiEndPoint } from './apiEndpoint';
import Cookies from 'js-cookie';

const token = Cookies.get('token') ? Cookies.get('token') : '';

const instance = axios.create({
    baseURL: apiEndPoint,
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`, 
    }

})
instance.interceptors.request.use((config) => {
    console.log('Request headers:', config.headers);
    return config; 
  });
 
export default instance;  