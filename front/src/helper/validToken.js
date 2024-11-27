import Cookies from 'js-cookie';
import {jwtDecode} from 'jwt-decode';

const isTokenExpired = (token) => {
  try {
    const { exp } = jwtDecode(token); 
    const currentTime = Math.floor(Date.now() / 1000); 
    return exp < currentTime; 
  } catch (error) {
    console.error('Error decoding token:', error);
    return true; 
  }
};

export const checkAuthToken = () => {
  const token = Cookies.get('token'); 
  if (!token || isTokenExpired(token)) {
    // alert('Session expired, please log in again.');
    Cookies.remove('token'); 
    window.location.href = '/'; 
  } else {
    console.log('Token is valid.');
  }
};

