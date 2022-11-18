import React from 'react';
import './Product.css';

const Product = (props) => {
    const {Descrizione, Prezzo} = props.product;
    return (
        <div className='big-div'>
            <div className='products-info'>
                <h3>{Descrizione}</h3>
                <h4>Prezzo: €{Prezzo}</h4>
            </div>
            <button  onClick={ () => props.handleAddToCart(props.product)} className='btn-cart'>Aggiungi al carrello!</button>
        </div>
    );
};

export default Product;