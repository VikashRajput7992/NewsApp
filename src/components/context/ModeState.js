import ModeContext from "./modeContext";
import React, { useState } from 'react'

const ModeState = (props) => {
    const [mode, setMode] = useState('light');
    const showMode = ()=>{
        if (mode==='light') {
            setMode('dark');
            localStorage.setItem('theme','dark');
            document.body.style.backgroundColor = 'black';
            document.body.style.color = 'white';
        }
        else{
            setMode('light');
            localStorage.setItem('theme','light');
            document.body.style.backgroundColor = 'white';
            document.body.style.color = 'black';
        }
    }
    return (
        <ModeContext.Provider value={{mode,showMode}}>
            {props.children}
        </ModeContext.Provider>
    )
}

export default ModeState