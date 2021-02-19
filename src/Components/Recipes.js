import React, { useState } from 'react';
import "./Recipes.css";
import ReactCardFlip from 'react-card-flip';

const Recipe = ({title,calories,image,ingredients,totalWeight}) => {
    const [showInfo, setshowInfo] = useState(false);
    const [isFlipped, setIsFlipped] = useState(false);

    const updateCalories = () => {
        setshowInfo(!showInfo);
    };

    const flipped = () => {
        setIsFlipped(!isFlipped);
    };

    return (
        <div className="flex-container">
            <div className="title">
                <p>{title}</p> 
            </div>
            <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal" flipSpeedBackToFront="1.2" flipSpeedFrontToBack="1.2">
                <div className="front">
                    <img className="image" 
                        onClick={flipped}
                        src={image} 
                        alt="" 
                        />
                </div>
                <div className="back" onClick={flipped}>
                    <ul>
                        {
                            ingredients.map((ingredient,index) => (
                                <li key={index}>{ingredient.text}</li>
                            ))
                        }
                    </ul>
                </div> 
            </ReactCardFlip >
            <div className="btn-info from-center" onClick={updateCalories}>
                More Info
            </div>
            <div>
                {
                    showInfo && <div><p>Calories: {Math.trunc(calories)}</p><p>TotalWeight: {Math.trunc(totalWeight)} </p></div>
                                 
                }
            </div>
        </div>
    );
};

export default Recipe;