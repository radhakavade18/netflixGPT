import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, moviesData }) => {
    return (
        <div className='px-8'>
            <h1 className='text-3xl font-semibold py-6 text-white'>{title}</h1>
            <div className='flex overflow-scroll'>
                <div className="flex gap-4">
                    {moviesData && moviesData.map((movie) =>
                        <MovieCard key={movie.id} posterPath={movie.poster_path} />
                    )}
                </div>
            </div>
        </div>
    )
}

export default MovieList