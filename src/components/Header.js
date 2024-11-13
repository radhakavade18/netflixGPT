import React from 'react'
import { auth } from '../utils/firebase';
import { signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Header = () => {
    const navigate = useNavigate();
    const user = useSelector(store => store.user)

    const handleSignOut = () => {
        signOut(auth).then(() => {
            navigate("/");
        }).catch((error) => {
            console.log(error);
            navigate("/error")
        });
    }

    return (
        <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between items-center">
            <img alt='logo' className="w-52" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png" />

            {user &&
                <div className="flex">
                    <img src={user?.photoURL} alt="user profile" className='w-16 rounded-full mr-4' />
                    <button className="bg-red-700 p-4 h-16 rounded-md text-white" onClick={handleSignOut}>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header