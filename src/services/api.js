const API_KEY = "d7ef68b3592bd4c66da6a33597c8259c";
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async () => {
    const response = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`);
    const data = await response.json(); // ✅ await added
    return data.results;
};

export const searchMovies = async (query) => {
    const response = await fetch(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`); // ✅ fixed query string
    const data = await response.json(); // ✅ await added
    return data.results;
};
