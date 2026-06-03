import axios from 'axios';
import {jwtDecode} from 'jwt-decode';

export const client = axios.create({ 
    baseURL: 'http://librariesapi.tryasp.net',
    headers: {
        'Content-Type': 'application/json',
    },
})
export async function login({ email, password}){
    const {data} = await client.post('/login', { email, password })
    return data.token;
}

export function decodeToken(token) {
    return jwtDecode(token);
}