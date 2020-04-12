import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: {
        Accept: 'application/json;charset=UTF-8',
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTg2NzEwOTkwLCJleHAiOjE1ODczMTU3OTB9.O1a9HH4Pb0qW1NldEcQKzKvxXc1Mam1luVaMolKLoO0`,
    },
});

export default api;
