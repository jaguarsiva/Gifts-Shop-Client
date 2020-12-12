import axios from "axios";

const api = axios.create({
    baseURL: "https://gifts-shop-server.herokuapp.com",
    withCredentials: true,
    headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
    }
});

export default {
    registerUser: userObj => api.post('/users',userObj),
    loginUser: (username,password) => api.get(`/users?username=${username}&password=${password}`),
    getAll: type => api.get('/' + type)
};