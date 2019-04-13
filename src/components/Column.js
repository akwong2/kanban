import React from 'react';
import Card from './Card';
import './Column.css';

const columns = (props) => {
    return (
        <div className="Column">
            {props.cards.map( (card, index) => {
                return <Card 
                        key={index} 
                        card={card}
                        forward={props.forward}
                        back={props.back}
                        col={props.col}/>
            })}
            <button onClick={() => props.addItem(props.col)}>Add Item</button>
        </div>
    )
};

export default columns;
