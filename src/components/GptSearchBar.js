import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import lang from "../utils/languageContants";
import openai from '../utils/openAi';

const GptSearchBar = () => {
    const language = useSelector((store) => store.config.language);
    const searchText = useRef(null);

    const handleGptSearchClick = async () => {
        // make an api call to  GPT API and get movie results
        const gptQuery = "Act as a movie recommendation system and suggest some movies for the query " + searchText.current.value + ". only give me 5 movies, comma seperated like the example result given ahead. Example Result: Don, Gadar, Koi mil gya, Golmal, Sholey";

        const gptResult = await openai.chat.completions.create({
            // messages: [{ role: 'user', content: gptQuery }],
            prompt: gptQuery,
            model: "gpt-3.5-turbo",
            temperature: 0.5,
            max_tokens: 100,
        });

        console.log(gptResult.choices);
    }

    return (
        <div className='pt-[10%] flex justify-center'>
            <form className="w-3/5 flex gap-4" onSubmit={(e) => e.preventDefault()}>
                <input type='text' ref={searchText} className='py-3 px-4 bg-white border w-10/12 rounded-md' placeholder={lang[language].gptSearchPlaceholder} />
                <button className='bg-red-700 px-6 py-2 rounded-md text-white' onClick={handleGptSearchClick}>{lang[language].search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar