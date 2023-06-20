import React, {useEffect, useState} from 'react';
import styles from './App.module.css';
import {Alert} from "./components/Alert/Alert";

const colors = ["red", "yellow", "blue", "purple", "green"];

function App() {
    const [colorIndex, setColorIndex] = useState(0);
    const [show, setShow] = useState(false)
    useEffect(() => {
        if (!show) {
            return;
        }
        setInterval(() => {
            setColorIndex(colorIndex >= colors.length - 1 ? 0 : colorIndex + 1);
        }, 1000 + Math.random() * 1000)
    });
    const start = () => setShow(true);
    return (
        <div className="App">
            {show ?
                <Alert text="Hello world" color={colors[colorIndex]}/> :
                <button
                    type="button"
                    onClick={start}
                    className={styles.startButton}
                >
                    Начать
                </button>
            }
        </div>
    );
}

export default App;
