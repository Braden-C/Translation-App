import React, { useState, useEffect, useRef } from 'react';

const Dropdown = ({ label, Languages, selected, onSelectedChange }) => {
    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        document.body.addEventListener('click', (event) => {
            if (ref.current.contains(event.target)) {
                return;
            }

            setOpen(false);

        },
            { capture: true }
        );
    }, [])

    const renderedLanguages = Languages.map((Language) => {
        if (Language.value === selected.value) {
            return null;
        }
        return (
            <div
                key={Language.value}
                className="item"
                onClick={() => onSelectedChange(Language)}
            > {Language.label}
            </div>
        );

    });


    return (
        <div ref={ref} className='ui form'>
            <div className='field'>
                <label className='label'>{label}</label>
                <div onClick={() => setOpen(!open)}
                    style={{ background: "rgb(37, 51, 65)", color: "white" }}
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}>
                    <i className='dropdown icon'></i>
                    <div className='text'>{selected.label}</div>
                    <div className={`menu ${open ? 'visible transition' : ''}`}>{renderedLanguages}</div>
                </div>
            </div>
        </div>
    );
};

export default Dropdown