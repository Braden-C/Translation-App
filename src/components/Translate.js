import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import './App.css'

const options = [
    {
        label: 'Afrikaans',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
]


const Translate = () => {

    const [language, setLanguage] = useState(options[0])
    const [text, setText] = useState('');

    return (
        <div className="main">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text</label>
                    <input classname="text input" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label={"Select a Language"}
                options={options}
                selected={language}
                onSelectedChange={setLanguage} />
            <hr />
            <h3 className="ui header label">Translation:</h3>
            <Convert text={text} language={language} />

        </div>

    );

};

export default Translate;