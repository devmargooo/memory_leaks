import styles from "./Alert.module.css";
import {useEffect} from "react";
import {sendAnalytics} from "../../services/sendAnalytics";

interface AlertProps {
    text: string;
    color: string;
}

export const Alert:React.FC<AlertProps> = ({text, color}) => {
    useEffect(() => {
        setInterval(() => {
            sendAnalytics(color);
        }, 1000);
    })
    return (
        <div className={styles.alert} style={{background: color}}>
            {text}
        </div>
    )
}
