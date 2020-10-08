import axios from 'axios'

var axiosInstance = axios.create({
    baseURL:'https://donate-api.azurewebsites.net',
});

export default axiosInstance
    