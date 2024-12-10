import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addMovieDetail } from "../utils/movieSlice";

const MovieTitle = ({ movie }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleGoBackHomepage = () => {
        dispatch(addMovieDetail(null));
        navigate("/browse");
    }
    return (
        <>
            <button className="drop-shadow border bg-gray-400 text-black text-l font-semibold rounded-md px-10 py-2 hover:bg-white mr-4 fixed z-10 right-3 top-2" onClick={handleGoBackHomepage}>Back to homepage</button>
            <div className="w-screen aspect-video pt-[12%] pl-12 absolute text-white bg-gradient-to-r from-black">
                <div className='w-1/4'>
                    <h1 className="text-5xl font-bold">{movie.title ? movie.title : movie.original_title}</h1>
                    <p className="py-4 text-lg mt-4">{movie.overview}</p>
                </div>
            </div>
        </>

    )
}

export default MovieTitle;