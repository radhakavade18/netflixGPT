import React from 'react'
import { TMDB_BG_CDN_URL } from '../utils/constants'

const Moviebackground = ({ movie_id }) => {
    return (
        <div>
            <img src={`${TMDB_BG_CDN_URL}${movie_id}`} alt='movie_background' />
        </div>
    )
}

export default Moviebackground