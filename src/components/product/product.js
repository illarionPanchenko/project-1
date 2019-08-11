import React from 'react';
import './product.css'
import { Card } from "react-bootstrap";

const Product = (props) => {
                return (
                    <Card.Body style={{display:'flex', flexDirection:'column',
                        boxShadow:' 0 0 10px rgba(0,0,0,0.3)',
                        alignItems:'center', justifyContent:'center'}}>
                            <Card.Img src={props.item.img} style={{width: 'auto',
                                maxWidth:'20.5vw',
                                maxHeight: '20.5vw',
                            marginBottom:'15px'}}/>
                            <Card.Title>{props.item.brand}</Card.Title>
                            <Card.Text>{props.item.name}</Card.Text>
                            <Card.Text>Price: ${props.item.price}</Card.Text>
                    </Card.Body>)
};

export default Product;
