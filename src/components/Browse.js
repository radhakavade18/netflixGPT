import React from 'react'
import Header from './Header';
import useNowPlayingMovies from '../hooks/UseNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';

const Browse = () => {
    const nowPlayingMovies = useNowPlayingMovies();
    return (
        <div>
            <Header />
            <MainContainer />
            <SecondaryContainer />
            {/*
                - Main Container
                    - Video background
                    - Video title
                - SecondaryContainer
                    - MoviesList * n
                        - cards * n
            */}

        </div>
    )
}

export default Browse