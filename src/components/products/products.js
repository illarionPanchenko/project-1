import React from 'react';
import Product from "../product/product";
import './products.css'
import { Card, CardColumns } from "react-bootstrap";


const Products =(props)=>{

    const elements = props.items.map((item)=>{
        return(
            <Card  style={{ width: '30vw', marginTop:'1vw' }} key={item.asin}>
                <Product item = {item} term = {props.term}/>
            </Card>
        )
    });

        return(
            <CardColumns style={{margin: "2vw"}}>
                {elements}
            </CardColumns>
        )
};

export default Products;
