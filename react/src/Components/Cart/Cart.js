import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const {cart} = props;
    let total = 0;
    let shipping = 0;
    for(const product of cart){
        total = total + product.Prezzo;
        shipping = 12;
    }
    const grandTotal = total + shipping;
    return (
        <div className='cart'>
            <h2>Il tuo carrello</h2>
            <p>Oggetti selezionati: {cart.length}</p>
            <p>Totale parziale: €{total}</p>
            <p>Spese di spedizione: €{shipping}</p>
            <h4>Totale: €{grandTotal}</h4>
            <button>Ordina!</button>
        </div>
    );
};

export default Cart;