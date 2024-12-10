import React from 'react'
import { TMDB_IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div className="w-48 cursor-pointer hover:w-56 hover:border-white hover:border-4 hover:rounded-md">
            <img alt='movie poster' src={TMDB_IMG_CDN_URL + posterPath} />
        </div>
    )
}

export default MovieCard;