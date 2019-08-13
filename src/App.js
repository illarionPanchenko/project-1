import React from 'react';
import './App.css';
import Products from "./components/products/products";
import Search from "./components/searchbar/searchbar";
import Category from "./components/category-buttons/category-buttons";
import{ BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {connect } from 'react-redux';
import * as actions from'./actions'
import {bindActionCreators} from "redux";



class App extends React.Component {

  state={
    array:[],
    visible:[],
  };


  componentDidMount() {
    fetch('https://demo8421975.mockable.io/products')
        .then(res=>{return (res.json())})
        .then((data)=>this.setState({array: data.products}))
        .then(()=>{
          this.setState(()=>{
            const charId = window.location.pathname.indexOf('/',1);
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
    if(this.props.category!==prevProps.category || this.state.visible===null){
      const visible = this.filter(this.state.array, this.props.category);
      this.setState({visible: visible}
      );
    }
  }

  search(items,term){
    if (term.length===0){
      return items;
    }
    return items.filter((item)=>{
      return item.brand.toLowerCase().indexOf(term)> -1;
    })
  };

  discharge=()=>{
    this.props.actions.change('')
  };

  filter = (items, filter) => {
    switch (filter) {
      case '/': return items;
      case '/all': return items;
      case '/home': return items.filter((item)=>item.bsr_category === "Home & Kitchen");
      case '/health': return items.filter((item)=>item.bsr_category === "Health & Personal Care");
      case '/baby': return items.filter((item)=>item.bsr_category === "Baby Products");
      case '/sport': return items.filter((item)=>item.bsr_category === "Sports & Outdoors");
      default: return null;
    }
  };

  render() {

    const {visible} = this.state;
    const visibleItems=this.search(visible, this.props.term);

    return (
        <Router>
        <div>
          <Search/>
          <Category
              discharge={this.discharge}
             />
          <Switch>
          <Route path={`${this.props.category}`} render={() =>
              <Products items={visibleItems}/>
          } />
            <Route path={`${this.props.category}/${this.props.term}`} render={() =>
             <Products items={visibleItems}/>
          } />
          </Switch>
        </div>
        </Router>
    );
  }
}

//////////////////////////////////////////----------------/////////////////////////////////////////////////////////

const mapStateToProps = function (state) {
  return{
    term: state.term,
    category: state.category
  }
};

const mapDispatchToProps = function (dispatch) {
  return{
    actions: bindActionCreators(actions, dispatch)
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

