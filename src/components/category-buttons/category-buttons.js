import React from 'react';
import { ButtonGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import { category, change } from "../../duck/products";
import styled from 'styled-components';
import history from '../../history';

const Wrapper = styled.section`
margin: 2vw;
`;
const StyledButtonGroup = styled(ButtonGroup)`
width: 10vw; 
marginTop: 1vw;
`;

const Category = () => {

    const dispatch = useDispatch();
    const term = useSelector(state => state.onChange);

    return (
        <Wrapper>
            <StyledButtonGroup vertical>
                    <Button onClick={() => {
                        dispatch(category('/all'));
                        dispatch(change(term));
                        history.push(`/all/${ term }`)
                        //  props.discharge();
                    }}>All</Button>
                    <Button onClick={() => {
                        dispatch(category('/home'));
                        dispatch(change(term));
                        history.push(`/home/${ term }`)
                        //   props.discharge();
                    }}>Home</Button>
                    <Button onClick={() => {
                        dispatch(category('/health'));
                        dispatch(change(term));
                        history.push(`/health/${ term }`)
                        //  props.discharge();
                    }}>Health</Button>
                    <Button onClick={() => {
                        dispatch(category('/baby'));
                        dispatch(change(term));
                        history.push(`/baby/${ term }`)
                        //  props.discharge();
                    }}>Baby</Button>
                    <Button onClick={() => {
                        dispatch(category('/sport'));
                        dispatch(change(term));
                        history.push(`/sport/${ term }`)
                        //  props.discharge();
                    }}>Sport</Button>
            </StyledButtonGroup>
        </Wrapper>

    )
};

export default Category;
