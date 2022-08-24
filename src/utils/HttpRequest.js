import axios from 'axios';
import { getToken } from './TokenLS';

export const HTTP_VERBS = {
    POST: "post",
    GET: "get",
    PUT: "put",
    DELETE: "delete"
};

const headersConfig = (token) => {
    return{
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`
    }
};

export const requestHttp = async ({
    method = HTTP_VERBS.POST,
    endpoint = '/',
    body = {},
    params = {}, //query params
    token= null

}) => {
    try {
        const url = process.env.REACT_APP_BASE_API + endpoint;
        const authToken = token || getToken();
        const options = {
            url,
            method,
            data: body,
            params,
            headers: headersConfig(authToken)
        };
        return await axios(options);
    } catch (error) {
        throw error;
    }
}