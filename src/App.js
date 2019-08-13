import React from 'react';
import './App.css';
import Products from "./components/products/products";
import Search from "./components/searchbar/searchbar";
import Category from "./components/category-buttons/category-buttons";
import{ BrowserRouter as Router, Route, Switch } from "react-router-dom";

export default class App extends React.Component {

  state={
    array:[],
    term:'',
    filter:'/',
    visible:[],
  };

  componentDidMount() {
    fetch('https://demo8421975.mockable.io/products')
        .then(res=>{return (res.json())})
        .then((data)=>this.setState({array: data.products}))
        .then(()=>{
          this.setState(()=>{
            const charId = window.location.pathname.indexOf('/',2);
            let path = '';
            let newTerm = '';
            if(charId===-1){
              path = window.location.pathname
            }else{
               path = window.location.pathname.slice(0, charId);
                newTerm = window.location.pathname.slice(charId+1, window.location.pathname.length);
            }
            const filtered = this.filter(this.state.array, path);
            const visible = this.search(filtered, newTerm);
            return {visible: visible}
          })
        })

  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    if(this.state.filter!==prevState.filter || this.state.visible===null){
      const visible = this.filter(this.state.array, this.state.filter);
      this.setState({visible: visible}
      );
    }
  }


  onSearchChange = (term) => {
    this.setState({term: term});
  };

  search(items,term){
    if (term.length===''){
      return items;
    }
    return items.filter((item)=>{
      return item.brand.toLowerCase().indexOf(term)> -1;
    })
  };

  onFilterChange = (item) => {
      this.setState({filter: item})
  };
  discharge=()=>{
    this.setState({term:''})
  };

  filter(items, filter){
    switch (filter) {
      case '/': return items;
      case '/all': return items;
      case '/home': return items.filter((item)=>item.bsr_category === "Home & Kitchen");
      case '/health': return items.filter((item)=>item.bsr_category === "Health & Personal Care");
      case '/baby': return items.filter((item)=>item.bsr_category === "Baby Products");
      case '/sport': return items.filter((item)=>item.bsr_category === "Sports & Outdoors");
      default: return null;
    }
  }


  render() {
    const visibleItems=this.search(this.state.visible, this.state.term);
    return (
        <Router>
        <div>
          <Search onSearch={this.onSearchChange} filter={this.state.filter} term={this.state.term}/>
          <Category discharge={this.discharge} filter={this.onFilterChange} category={this.state.filter} term={this.state.term}/>
          <Switch>
          <Route path={`${this.state.filter}`} render={() =>
              <Products items={visibleItems} term={this.state.term} filter={this.state.filter}/>
          } />
            <Route path={`${this.state.filter}/${this.state.term}`} render={() =>
             <Products items={visibleItems} term={this.state.term} filter={this.state.filter}/>
          } />
          </Switch>

        </div>
        </Router>
    );
  }
}

