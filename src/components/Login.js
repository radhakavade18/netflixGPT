import React, { useState } from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_small.jpg" alt="background" />
            </div>
            <div className="max-w-[450px] absolute bg-black bg-opacity-80 w-3/12 mx-auto left-0 right-0 text-white py-20 px-12 mt-36">
                <form className="gap-8 flex-row grid">
                    <h1 className="font-bold text-3xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                    {!isSignInForm && (
                        <div>
                            <input type='text' placeholder='Full Name' className="w-full px-2 py-4 bg-gray-600 rounded-md" />
                        </div>
                    )}
                    <div>
                        <input type='text' placeholder='Email address' className="w-full px-2 py-4 bg-gray-600 rounded-md" />
                    </div>
                    <div>
                        <input type='password' placeholder='Password' className="w-full px-2 py-4 bg-gray-600 rounded-md" />
                    </div>
                    <div>
                        <button className="bg-red-700 w-full p-4 rounded-md">{isSignInForm ? "Sign In" : "Sign Up"}</button>
                    </div>
                    <span className="font-light">{isSignInForm ? "New to Netflix?" : "Already regstered?"} <Link className="font-bold" onClick={toggleSignInForm}>{isSignInForm ? "Sign Up" : "Sign In"} Now</Link></span>
                </form>
            </div>
        </div>
    )
}

export default Login