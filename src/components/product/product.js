import React from 'react';
import './product.css'

const Product = (props) => {
                return (
                    <div className='item'>
                            <img src={props.item.img} alt='' className="img"/>
                            <h2>{props.item.brand}</h2>
                            <p>{props.item.name}</p>
                            <h2>Price: ${props.item.price}</h2>
                    </div>)
};

export default Product;