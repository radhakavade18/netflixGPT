import React from 'react'
import { useSelector } from 'react-redux'
import Videobackground from './Videobackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
    const movie = useSelector(store => store?.movies.nowPlayingMovies);

    if (!movie) return;
    const mainMovie = movie[0];

    const { original_title, overview, id } = mainMovie;
    return (
        <div>
            <VideoTitle title={original_title} overview={overview} />
            <Videobackground video_id={id} />
        </div>
    )
}

export default MainContainer