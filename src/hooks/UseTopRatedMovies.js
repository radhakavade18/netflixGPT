import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    // fetch data from TMDB api and update the store
    useEffect(() => {
        getTopRatedMovies();
    }, []);

    const getTopRatedMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)
        const json = await data.json();
        dispatch(addTopRatedMovies(json.results))
    }
}

export default useTopRatedMovies;