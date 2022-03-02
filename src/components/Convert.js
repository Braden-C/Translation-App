import axios from "axios";
import React, { useState, useEffect } from "react";

const Convert = ({ language, text }) => {

    const [translated, setTranslated] = useState('')
    const [debouncedText, setDebouncedText] = useState(text)

    useEffect(() => {
        const timerId = setTimeout(() => {
            setDebouncedText(text);
        }, 500)

        return () => {
            clearTimeout(timerId);
        }
    })
    useEffect(() => {
        const dotranslation = async () => {
            const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2',
                {},
                {
                    params: {
                        q: debouncedText,
                        target: language.value,
                        key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM'
                    },
                }
            );
            setTranslated(data.data.translations[0].translatedText)
        };
        dotranslation()
    }, [language, debouncedText]);

    return (
        <div>
            <h1 className="ui header">{translated}</h1>
        </div>

    )


};

export default Convert;