import React from 'react';
import './searchbar.css';
import {FormControl} from "react-bootstrap";

export default class Search extends React.Component{
    state={
        term: ''
    };

    onSearch=(e)=> {
        const term = e.target.value.toLowerCase();
        this.setState({term});
        this.props.onSearch(term);
    };

    render() {
        return(
            <div className="flex-box">
                <FormControl placeholder='type to search' style={{width: '50%', margin: '20px'}}
                       value={this.state.term}
                       onChange={this.onSearch}/>
            </div>
        )
    }
}