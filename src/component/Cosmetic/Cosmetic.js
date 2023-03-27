import React from 'react';
import { addToDb, removeFromDb } from '../../utillities/fakeDb';

const Cosmetic = (props) => {
    const {name, price, id} = props.cosmetic
    
    const addToCart = (id) => {
        addToDb(id) 
    }
    const removeFromCart = (id) => {
        removeFromDb(id)
    }
    return (
        <div style={{border: '2px solid purple',background: 'yellow', margin: '1rem', borderRadius: '5px', padding: '0.5rem'}}>
            <h2>Bye This: {name}</h2>
            <p>Only For: {price}</p>
            <p><small>id: {id}</small></p>
            <button onClick={() => addToCart(id)}>Add to cart</button>
            <button onClick={() => removeFromCart(id)}>Remove from DB</button>
        </div>
    );
};

export default Cosmetic;