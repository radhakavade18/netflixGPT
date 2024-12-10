import React from 'react'
import { useSelector } from 'react-redux'
import Moviebackground from './Moviebackground';
import MovieTitle from './MovieTitle';
import { TMDB_IMG_CDN_URL } from '../utils/constants';

const MovieDetails = () => {
    const movieDetail = useSelector((store) => store.movies.movieDetail);
    console.log(movieDetail)
    return (
        <div>
            <MovieTitle movie={movieDetail} />
            <Moviebackground movie_id={movieDetail.backdrop_path ? movieDetail.backdrop_path : movieDetail.belongs_to_collection.backdrop_path} />

            <div className='p-16 flex gap-12'>
                <img src={`${TMDB_IMG_CDN_URL}${movieDetail.poster_path}`} alt='posterPath' />
                <div>
                    <h1 className='text-4xl font-bold'>{movieDetail.title ? movieDetail.title : movieDetail.original_title}</h1>
                    <div className='text-l mt-2'>{movieDetail.tagline}</div>
                    {movieDetail.release_date && <div className='mt-4'>Relase Date: <span className='font-semibold'>{movieDetail.release_date}</span></div>}
                    <div className='mt-5'>{movieDetail.overview}</div>
                    {movieDetail.genres &&
                        <>
                            <div className='font-semibold text-xl mt-5'>Genres</div>
                            <div className='flex gap-4 mt-5'>
                                {movieDetail?.genres.map((genre) => (
                                    <div key={genre.id} className='bg-purple-200 drop-shadow py-2 px-4 rounded-md'>
                                        {genre.name}
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                    {movieDetail.status === "Released" && <div className='mt-5 text-lg'>Status : <span className='font-semibold'>{movieDetail.status} ✅</span></div>}
                    {movieDetail.spoken_languages &&
                        <>
                            <div className='font-semibold text-xl mt-5'>Languages</div>
                            <div className='flex gap-4 mt-5'>
                                {movieDetail?.spoken_languages.map((lang) => (
                                    <div key={lang.id} className='bg-white drop-shadow py-2 px-4 rounded-md'>
                                        {lang.english_name}
                                    </div>
                                ))}
                            </div>
                        </>
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieDetails