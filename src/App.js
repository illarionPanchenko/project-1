import React from 'react';
import './App.css';
import Products from "./components/products/products";
import Search from "./components/searchbar/searchbar";

export default class App extends React.Component {

  state={
    array:[],
    term:'',
  };

  componentDidMount() {
    fetch('https://demo8421975.mockable.io/products')
        .then(res=>{return (res.json())})
        .then((data)=>this.setState({array: data.products}))
  }

  onSearchChange = (term) => {
    this.setState({term: term});
  };

  search(items,term){
    if (term.length===0){
      return items;
    }
    return items.filter((item)=>{
      return item.brand.toLowerCase().indexOf(term)> -1;
    })
  };


  render() {

    const visibleItems=this.search(this.state.array,this.state.term);
    return (
        <div className="App">
          <Search onSearch={this.onSearchChange}/>
          <Products items={visibleItems} term={this.state.term}/>
        </div>
    );
  }
}

