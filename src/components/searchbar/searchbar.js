import React from 'react';
import './searchbar.css';
import {FormControl, InputGroup, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';
import { useDispatch, useSelector } from "react-redux";
import {change, onChange} from "../../actions";


const Search = () => {

    const term = useSelector(state=>state.onChange);
    const filter = useSelector(state=>state.category);
    const dispatch = useDispatch();

   const onSearchValue = (e) => {
        const value = e.target.value.toLowerCase();
       dispatch(onChange(value))
    };

   const onSubmit=()=>{
        dispatch(change(term))
    };
        return(
            <div className="flex-box">
                <InputGroup className="mb-3" style={{width: '70vw', marginTop:'20px'}}>
                    <FormControl aria-describedby="basic-addon1" onChange={onSearchValue}
                    />
                    <InputGroup.Prepend>
                        <LinkContainer
                            to={`${filter ==='/' ? 'all':filter}/${term}`}>
                        <Button variant="outline-secondary" onClick={onSubmit}>Search</Button>
                        </LinkContainer>
                    </InputGroup.Prepend>
                </InputGroup>
            </div>
        )
};

export default Search;

