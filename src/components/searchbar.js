import React from 'react';
import { FormControl, InputGroup, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { change, onChange } from '../duck/products';
import styled from 'styled-components';
import history from '../history';

const Wrapper = styled.section`
    margin-left: 17%;
`;
const StyledInputGroup = styled(InputGroup)`
    width: 76vw;
    margin-top: 20px;
`;

const Search = () => {

    const term = useSelector(state => state.onChange);
    const category = useSelector(state => state.category);
    const dispatch = useDispatch();

    const onSearchValue = (e) => {
        const value = e.target.value.toLowerCase();
        dispatch(onChange(value))
    };

    const onSubmit = () => {
        dispatch(change(term));
        history.push(`${category==='/' ? '/all' : category}/${term}`)
    };
    return (
        <Wrapper>
            <StyledInputGroup className="mb-3">
                <FormControl aria-describedby="basic-addon1" onChange={ onSearchValue }/>
                <InputGroup.Prepend>
                        <Button variant="outline-secondary" onClick={ onSubmit }>Search</Button>
                </InputGroup.Prepend>
            </StyledInputGroup>
        </Wrapper>
    )
};

export default Search;

