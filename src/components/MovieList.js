import React from 'react'
import MovieCard from './MovieCard'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux';
import { addMovieDetail } from "../utils/movieSlice";
import { useNavigate } from 'react-router-dom';

const MovieList = ({ title, moviesData }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleMovieDetails = async (movie_id) => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}`, API_OPTIONS);
        const json = await data.json();
        dispatch(addMovieDetail(json));
        navigate(`movie/${movie_id}`)
    }

    return (
        <div className='px-8'>
            <h1 className='text-3xl font-semibold py-6 text-white'>{title}</h1>
            <div className='flex overflow-scroll'>
                <div className="flex gap-4">
                    {moviesData && moviesData.map((movie) =>
                        <div key={movie.id} onClick={() => handleMovieDetails(movie.id)}>
                            <MovieCard posterPath={movie.poster_path} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList