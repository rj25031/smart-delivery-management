import Cookies from 'js-cookie';
import { jwtDecode } from 'jwt-decode';

export const checkAuthToken = () => {
  const token = Cookies.get('token'); 
  if (!token) {
    console.log('Session expired, please log in again.');
    Cookies.remove('token'); 
    return null; 
  }

  try {
    const decodedToken = jwtDecode(token); 
    const currentTime = Math.floor(Date.now() / 1000); 
    if (decodedToken.exp < currentTime) {

      console.log('Session expired, please log in again.');
      Cookies.remove('token'); 
      return null;
    }

    return decodedToken;
  } catch (error) {
    console.error('Invalid token:', error);
    console.log('Invalid session, please log in again.');
    Cookies.remove('token'); 
    return null;
  }
};
