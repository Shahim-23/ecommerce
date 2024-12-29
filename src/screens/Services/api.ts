import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

// Create an Axios instance
const apiClient = axios.create({
  baseURL: 'http://192.168.1.14:8081/api', // Add /api here
  timeout: 10000,
});

apiClient.interceptors.request.use(
  async (config) => {
    try {
      const token = await AsyncStorage.getItem('accessToken');
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      console.error('Error retrieving token:', error);
    }
    return config;
  },
  (error) => Promise.reject(error)
);


apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error);
    return Promise.reject(error);
  }
);

export default apiClient;
