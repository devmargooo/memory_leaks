import {Link} from "react-router-dom";
import React from "react";

export default ()=>{
    return (
        <><h1>главная</h1>
            <Link to="/analytics">analytics</Link>
            <Link to="/listener">listener</Link>
        </>
    )
}
