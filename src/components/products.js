import React from 'react';
import Product from './product';
import { Card, CardColumns } from 'react-bootstrap';
import styled from 'styled-components';

const StyledCard = styled(Card)`
    width: 22vw;
    margin-top: 1vw;
`;
const StyledCardColumns = styled(CardColumns)`
    margin-top: 1vw;
    margin-right: 7%;
    margin-left: 2vw;
`;

const Products = ( props ) => {

    const elements = props.items.map((item) => {
        return (
            <StyledCard key={ item.asin }>
                <Product item={ item }/>
            </StyledCard>
        )
    });
    let noItems = '';
    if (props.items.length === 0) {
        noItems = 'no items'
    }

    return (
        <StyledCardColumns>
            { elements }
            { noItems }
        </StyledCardColumns>
    )
};

export default Products;
