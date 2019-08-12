import React from 'react';
import './searchbar.css';
import {FormControl, InputGroup, Button} from "react-bootstrap";
import { LinkContainer } from 'react-router-bootstrap';

export default class Search extends React.Component{
    state={
        term: ''
    };

    onSearch=(e)=> {
        const term = e.target.value.toLowerCase();
        this.setState({term});
    };

    onSubmit=(term)=>{
        this.props.onSearch(this.state.term);
    };


    render() {
        return(
            <div className="flex-box">
                <InputGroup className="mb-3" style={{width: '70vw', marginTop:'20px'}}>
                    <FormControl aria-describedby="basic-addon1" onChange={this.onSearch}
                    />
                    <InputGroup.Prepend>
                        <LinkContainer to={`${this.props.filter}/${this.state.term}`}>
                        <Button variant="outline-secondary" onClick={this.onSubmit}>Button</Button>
                        </LinkContainer>
                    </InputGroup.Prepend>
                </InputGroup>


            </div>
        )
    }
}