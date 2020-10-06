import axios from 'axios'

var axiosInstance = axios.create({
    baseURL:'https://api-am-donate.azurewebsites.net',
});

export default axiosInstance
    