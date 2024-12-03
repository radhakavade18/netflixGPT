import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    // fetch data from TMDB api and update the store
    useEffect(() => {
        getPopularMovies();
    }, []);

    const getPopularMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addPopularMovies(json.results))
    }
}

export default usePopularMovies;