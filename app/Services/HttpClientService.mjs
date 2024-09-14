import axios from "axios";
import { API_SERVER } from "../../config/baseConfig.mjs";
import { 
    HttpDataValidationException, 
    HttpInternalServerException, 
    HttpInvalidRequestException 
} from "../Exceptions/HttpClientErrorException.mjs";

// @todo: Create Axios Instance
const HttpClientService = axios.create({
    baseURL: API_SERVER,
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    },
    timeout: 5000,
});

// @todo: Axios Interceptor Response
HttpClientService.interceptors.response.use(
    res => Promise.resolve({ result: res.data, status: res.status }),
    err => {
        if (err.status === 422 || err.response.status === 422) {
            return Promise.reject(HttpDataValidationException(err.response.data, err.status || err.response.status));
        } else if (err.request) {
            return Promise.reject(HttpInvalidRequestException());
        } else {
            return Promise.reject(HttpInternalServerException());
        }
    }
);

export default HttpClientService;