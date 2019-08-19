import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

export const CardBody = styled(Card.Body)`
    display: flex;
    flex-direction: column;
    box-shadow: 0 0 10px rgba(0,0,0,0.3);
    align-items: center; 
    justify-content: center;
`;
const CardImg = styled(Card.Img)`
    width: auto;
    max-width: 15.5vw;
    max-height: 15.5vw;
    margin-bottom: 15px;
`;

const Product = (props) => {
    return (
        <CardBody>
            <CardImg src={ props.item.img }/>
            <Card.Title>{ props.item.brand }</Card.Title>
            <Card.Text>{ props.item.name }</Card.Text>
            <Card.Text>Price: ${ props.item.price }</Card.Text>
        </CardBody>)
};

export default Product;
