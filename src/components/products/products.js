import React from 'react';
import Product from "../product/product";
import './products.css'

const Products =(props)=>{



    const elements = props.items.map((item)=>{
        return(
            <div key={item.asin} className='flex-box'>
                <Product item = {item} term = {props.term}/>
            </div>
        )
    });

        return(
            <div className='flex-box'>
                {elements}
            </div>
        )
};

export default Products;