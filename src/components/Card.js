import React from 'react';
import './Card.css';

const card = (props) => {
    return (
        <div className="Card">
            <div className="Back">
                {!(props.col === "col1") 
                    ? <button onClick={() => props.back(props.col, props.card)}>B</button> 
                    : null}
            </div>
            <div className="Element">
                {props.card}
            </div>
            <div className="Forward">
                {!(props.col === "col4") 
                    ? <button onClick={() => props.forward(props.col, props.card)}>F</button> 
                    : null}
            </div>
        </div>
    )
};

export default card;
