import React, { useState } from "react";
import Dropdown from "./Dropdown";
import Convert from "./Convert";
import Languages from "./Languages"
import './App.css'

const Translate = () => {

    const [language, setLanguage] = useState(Languages[0])
    const [text, setText] = useState('');

    return (
        <div className="main">
            <div className="ui form">
                <div className="field">
                    <label>Enter Text:</label>
                    <input style={{ background: "rgb(37, 51, 65, 1)", color: "white" }} className="input text my-background" value={text} onChange={(e) => setText(e.target.value)} />
                </div>
            </div>
            <Dropdown
                label={"Select a Language:"}
                Languages={Languages}
                selected={language}
                onSelectedChange={setLanguage} />
            <hr />
            <h3 className="ui header label">Translation:</h3>
            <Convert text={text} language={language} />

        </div>

    );

};

export default Translate;