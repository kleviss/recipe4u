import React from "react";
import style from "./recipe.module.css";

const Recipe = ({title, image, calories, link}) => {
    return(
        <div className={style.recipe}>
            <img alt={title} src={image}></img>
            <h1>{title}</h1>
            <p>Diet Label: <b>{calories}</b></p>
            <a href={link} target="_blank" rel="noreferrer">See Recipe</a>
            <br/>
            </div>
        
    )
}

export default Recipe;