import React from 'react';
import './card.style.css';
export const Card = (props)=>{
    return <div className="card-container">
    <img alt='monster' src={`https://robohash.org/${props.kitten.id}?set=set4&size=180x180`}/>
    <h1>{props.kitten.name}</h1>
    <p>{props.kitten.email}</p>
    </div>
}