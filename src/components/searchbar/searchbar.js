import React from 'react';
import './searchbar.css';

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
            <div>
                <input placeholder='type to search' className='searchbar'
                       value={this.state.term}
                       onChange={this.onSearch}/>
            </div>
        )
    }
}