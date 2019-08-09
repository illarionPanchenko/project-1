import React from 'react';
import './product.css'
import { Card } from "react-bootstrap";

const Product = (props) => {
                return (
                    <Card.Body>
                            <Card.Img src={props.item.img} />
                            <Card.Title>{props.item.brand}</Card.Title>
                            <Card.Text>{props.item.name}</Card.Text>
                            <Card.Text>Price: ${props.item.price}</Card.Text>
                    </Card.Body>)
};

export default Product;