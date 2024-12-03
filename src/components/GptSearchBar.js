import React from 'react'

const GptSearchBar = () => {
    return (
        <div className='pt-[10%] flex justify-center'>
            <form className="w-3/5 flex gap-4">
                <input type='text' className='py-3 px-4 bg-white border w-10/12 rounded-md' placeholder='What would you like to watch today?' />
                <button className='bg-red-700 px-6 py-2 rounded-md text-white' >Search</button>
            </form>
        </div>
    )
}

export default GptSearchBar