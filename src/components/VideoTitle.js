import React from 'react'

const VideoTitle = ({ title, overview }) => {
    return (
        <div className="w-screen aspect-video pt-[12%] pl-12 absolute text-white bg-gradient-to-r from-black">
            <div className='w-1/4'>
                <h1 className="text-5xl font-bold">{title}</h1>
                <p className="py-4 text-lg mt-4">{overview}</p>
            </div>
            <div className='mt-8'>
                <button className="drop-shadow bg-white text-black text-xl rounded-md px-10 py-4 hover:bg-gray-400 mr-4"><i className='pi pi-play mr-2'></i>Play</button>
                <button className='drop-shadow bg-gray-50 bg-opacity-20 text-xl rounded-md px-10 py-4 hover:bg-red-300'><i className='pi pi-info-circle mr-2'></i>More Info</button>
            </div>
        </div>
    )
}

export default VideoTitle