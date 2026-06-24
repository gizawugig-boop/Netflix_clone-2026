import axios from "axios";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
