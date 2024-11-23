import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useDispatch } from "react-redux";

const useMovieTrailer = (video_id) => {

    const dispatch = useDispatch();
    useEffect(() => {
        fetchMovieTrailer();
    }, []);

    // const trailerId = useSelector((state) => state.movies.trailerVideo.key)

    const fetchMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${video_id}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();

        const trailerData = json.results.filter((video) => video.type === "Trailer");
        const trailer = trailerData.length ? trailerData[0] : json.results[0]
        console.log(trailer);
        dispatch(addTrailerVideo(trailer));
    }
}

export default useMovieTrailer;