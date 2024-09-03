import axios from 'axios';

// Create an Axios instance
const instance = axios.create({
    baseURL: 'https://anildwa-aisearch-api.azurewebsites.net' //'http://localhost:7071'
});

// Set a default Authorization header for all requests
instance.defaults.headers.common['Authorization'] = 'AUTH TOKEN FROM INSTANCE';

// Add a request interceptor to set custom request headers
instance.interceptors.request.use(config => {
    // Set custom request headers here
    config.headers['x-ms-azs-return-searchid'] = 'true';
    config.headers['Access-Control-Expose-Headers'] = 'x-ms-azs-searchid';
    return config;
}, error => {
    // Handle the error
    return Promise.reject(error);
});

// Add a response interceptor to retrieve custom response headers
instance.interceptors.response.use(response => {
    // Retrieve the custom response header
    const searchId = response.headers['x-ms-azs-searchid'];
    if (searchId) {
        console.log(`Search ID: ${searchId}`);
    }
    return response;
}, error => {
    // Handle the error
    return Promise.reject(error);
});

export default instance;
