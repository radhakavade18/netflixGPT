import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/UseNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import useTopRatedMovies from '../hooks/UseTopRatedMovies';
import useUpcomingMovies from '../hooks/UseUpcomingMovies';
import usePopularMovies from '../hooks/UsePopularMovies';
import GptSearch from './GptSearch';
import { useSelector } from 'react-redux';

const Browse = () => {
    useNowPlayingMovies();
    usePopularMovies();
    useTopRatedMovies();
    useUpcomingMovies();

    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
    const showMovieDetails = useSelector((store) => store.movies.movieDetail);

    return (
        <div>
            <Header />
            {showGptSearch ? (
                <GptSearch />
            ) : (
                <>
                    <MainContainer />
                    <SecondaryContainer />
                </>
            )}
        </div>
    )
}

export default Browse