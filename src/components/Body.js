import React, { useEffect } from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import Error from './Error';
import MovieDetails from './MovieDetails';

const Body = () => {
    const appRouter = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
        { path: "/browse/movie/:id", element: <MovieDetails /> },
        { path: "/error", element: <Error /> }
    ])

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body