import axios from "axios";

const api = axios.create({
    baseURL: 'https://fakedrivebackend.herokuapp.com'
})

export default api;