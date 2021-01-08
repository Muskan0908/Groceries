import React from 'react';
import './style.css';


const Card = props => {
    return (
        <div className="card-container">
            <p>{props.title}</p>
            <img className="image-style" src={props.url}/>
            <p>{props.price}</p>
            <button className="button-style" onClick={()=>props.onAdd({title:props.title, price:props.price, quantity:props.quantity})}>Add to Cart</button>
            </div>
    )
}
export default Card