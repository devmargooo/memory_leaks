import React, {useEffect, useState} from 'react';
import './App.css';
import {Alert} from "./components/Alert/Alert";

function Analitic() {
    const [color, setColor] = useState("red");
    useEffect(() => {
        setTimeout(() => {
            setColor("yellow");
            setTimeout(() => {
                setColor("green");
            }, 2700);
        }, 1200);
    }, []);
    return (
        <div className="App">
            <Alert text="Hello world" color={color}/>
        </div>
    );
}

export default Analitic;
