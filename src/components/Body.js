import React, { useEffect } from 'react'
import Browse from './Browse'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Login from './Login'
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { auth } from '../utils/firebase';
import Error from './Error';

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        { path: "/", element: <Login /> },
        { path: "/browse", element: <Browse /> },
        { path: "/error", element: <Error /> }
    ])

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
            } else {
                dispatch(removeUser());
            }
        });
    }, [dispatch]);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    )
}

export default Body