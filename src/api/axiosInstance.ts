import axios from "axios";

export const publicAxios = axios.create({
    baseURL:"https://api.themoviedb.org",
    headers: {
        accept: "application/json",
        Authorization:
            "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlNzdhOGQzYjIxZmFmYzcxOWIxZTYwZDIxNjNhZGI2OSIsIm5iZiI6MTcyNTk1NTAwNi4yNDQyOTcsInN1YiI6IjY2ZGZmYTJjOWNmZWIyOGQ2NjZkZjE1YiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ATwDpRK_Y8kFyjeszQlwhHZb_kLLESx4p7tL9i7duYk",
    },
})