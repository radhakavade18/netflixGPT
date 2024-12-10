import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from '../utils/userSlice';
import { toggleGptSearchView } from '../utils/gptSlice';
import { LOGO, SUPOORTED_LANGUAGES } from "../utils/constants"
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)
    const dispatch = useDispatch();
    const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
            console.log(error);
            navigate("/error")
        });
    }
    const movieDetail = useSelector((store) => store.movies.movieDetail);
    // onAuthStateChanged call everytime header is rendered, and what it does is, its a callback for auth, everytime login, signup or sigout api calls from firebase this method gets callled automatically and route accordingly
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                navigate("/browse")
            } else {
                dispatch(removeUser());
                navigate("/")
            }
        });
        // unsubscribe when component unmount
        return () => unsubscribe();
    }, [dispatch]);

    const handleGptSearchClick = () => {
        dispatch(toggleGptSearchView());
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }

    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
            <img alt='logo' className="w-52" src={LOGO} />

            {user &&
                <div className="flex gap-4 items-center">
                    {showGptSearch &&
                        <select className='bg-gray-900 m-1 text-white px-3 py-2' onChange={handleLanguageChange}>
                            {SUPOORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
                        </select>
                    }
                    <button className="bg-purple-600 text-white py-2 px-4 rounded-md" onClick={handleGptSearchClick}>
                        {showGptSearch ? "Homepage" : "GPT Search"}</button>
                    <img src={user?.photoURL} alt="user profile" className='w-12 rounded-md' />
                    <button className="bg-red-700 px-6 py-2 rounded-md text-white" onClick={handleSignOut}>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header