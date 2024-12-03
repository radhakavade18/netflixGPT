import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector((store) => store.movies)

    return (
        <div className=' bg-black'>
            <div className='-mt-44 relative z-10'>
                <MovieList title={"New Playing"} moviesData={movies.nowPlayingMovies} />
                <MovieList title={"Popular"} moviesData={movies.popularMovies} />
                <MovieList title={"Top Rated"} moviesData={movies.topRatedMovies} />
                <MovieList title={"Upcoming"} moviesData={movies.upcomingMoview} />
            </div>
        </div>
    )
}

export default SecondaryContainer