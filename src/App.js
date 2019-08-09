import React from 'react';
import './App.css';
import Products from "./components/products/products";
import Search from "./components/searchbar/searchbar";
import Category from "./components/category-buttons/category-buttons";

export default class App extends React.Component {

  state={
    array:[],
    term:'',
    filter:'all'
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

  onFilterChange = (item) => {
      this.setState({filter: item})
  };

  filter(items, filter){
    switch (filter) {
      case 'all': return items;
      case 'home': return items.filter((item)=>item.bsr_category === "Home & Kitchen");
      case 'health': return items.filter((item)=>item.bsr_category === "Health & Personal Care");
      case 'baby': return items.filter((item)=>item.bsr_category === "Baby Products");
        case 'sport': return items.filter((item)=>item.bsr_category === "Sports & Outdoors");
        default: return null;
    }
  }


  render() {

    const visibleItems=this.filter(this.search(this.state.array,this.state.term),this.state.filter);
    return (
        <div>
          <Search onSearch={this.onSearchChange}/>
          <Category filter={this.onFilterChange}/>
          <Products items={visibleItems} term={this.state.term}/>
        </div>
    );
  }
}

