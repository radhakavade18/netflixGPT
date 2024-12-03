import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/Validate';
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { BG_IMG, USER_AVATAR } from '../utils/constants';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState("")
    const email = useRef(null);
    const password = useRef(null);
    const userName = useRef(null);

    const dispatch = useDispatch();

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    const handleButtonClick = () => {
        // Validate the form data
        const message = checkValidData(email.current.value, password.current.value);
        setErrorMessage(message);
        if (message) return;

        if (!isSignInForm) {
            // sign up logic
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    updateProfile(user, {
                        displayName: userName.current.value, photoURL: USER_AVATAR
                    }).then(() => {
                        const { uid, email, displayName, photoURL } = auth.currentUser;
                        dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }))
                    }).catch((error) => {
                        setErrorMessage(error.message)
                    });
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(`${errorCode} ${errorMessage}`)
                });
        } else {
            // sign in logic
            if (email.current && password.current) {
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                    .then((userCredential) => {
                        // Signed in 
                        const user = userCredential.user;
                    })
                    .catch((error) => {
                        const errorCode = error.code;
                        const errorMessage = error.message;
                        setErrorMessage(`${errorCode} ${errorMessage}`)
                    });
            }
        }
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src={BG_IMG} alt="background" />
            </div>
            <div className="max-w-[450px] absolute bg-black bg-opacity-80 w-3/12 mx-auto left-0 right-0 text-white py-20 px-12 mt-36 rounded-md">
                <form className="gap-8 flex-row grid" onSubmit={(e) => e.preventDefault()}>
                    <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && (
                        <div>
                            <input ref={userName} type='text' placeholder='Full Name' className="w-full px-2 py-4 bg-gray-600 rounded-md" />
                        </div>
                    )}
                    <div>
                        <input type='text' ref={email} placeholder='Email address' className="w-full px-2 py-4 bg-gray-600 rounded-md" />
                    </div>
                    <div>
                        <input type='password' ref={password} placeholder='Password' className="w-full px-2 py-4 bg-gray-600 rounded-md" />
                    </div>
                    {errorMessage && <span className="text-red-500 text-lg">{errorMessage}</span>}
                    <div>
                        <button className="bg-red-700 w-full p-4 rounded-md" onClick={handleButtonClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    </div>
                    <span className="font-light">{isSignInForm ? "New to Netflix?" : "Already regstered?"} <span className="font-bold cursor-pointer" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up" : "Sign In"} Now</span></span>
                </form>
            </div>
        </div>
    )
}

export default Login