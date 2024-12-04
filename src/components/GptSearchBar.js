import React from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/languageContants";

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.language);

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className="w-3/5 flex gap-4">
                <input type='text' className='py-3 px-4 bg-white border w-10/12 rounded-md' placeholder={lang[language].gptSearchPlaceholder} />
                <button className='bg-red-700 px-6 py-2 rounded-md text-white' >{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar