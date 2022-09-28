import React from "react";
import "./Card.css"
const Card = (props)=>{
    return (
        <div className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
        </div>
    );
};
export default Card;