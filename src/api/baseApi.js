import axios from 'axios';
const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  responseType: 'json',
});

// add content type default header
axiosInstance.interceptors.request.use((request) => {
  if (!request.headers['Content-type']) {
    request.headers['Content-Type'] = 'application/json';
  }
  return request;
});

// get data from api default
axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  // handle error
  (error) => {
    const { response } = error;
    // reject promise
    // for development
    console.log(error);
    return Promise.reject(response);
  }
);

const post = async (path, data, headers = {}) => {
  return axiosInstance.post(path, data, headers);
};

const update = async (path, data) => {
  return axiosInstance.put(path, data);
};

const deleteR = async (path) => {
  return axiosInstance.delete(path);
};

const get = async (path, queryParams = '') => {
  return axiosInstance.get(`${path}${queryParams ? '?' + queryParams : ''}`);
};
export { post, update, deleteR, get };
