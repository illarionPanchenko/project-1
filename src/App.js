import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import history from './history';
import { Router } from 'react-router-dom';
import styled from 'styled-components';

import Products from './components/products/products';
import Search from './components/searchbar/searchbar';
import Category from './components/category-buttons/category-buttons';
import { fetchData } from './duck/products';

const Wrapper = styled.section`
  display: grid;
  grid-template-columns: 15% 85%;
`;

class App extends React.Component {

    state = {
        visible: [],
    };

    componentDidMount() {
        this.props.fetchData();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.data !== prevProps.data) {
            this.setState(() => {
                const visible = this.search(this.filter(this.props.data, this.props.category), this.props.term);
                return {visible: visible}
            })
        }
        if (this.props.category !== prevProps.category) {
            const visible = this.filter(this.props.data, this.props.category);
            this.setState({visible: visible}
            );
        }
    }

    search(items, term) {
        if (term.length === 0) {
            return items;
        }
        // Search only from start
      return items.filter(item => {
            return !item.brand.toLowerCase().indexOf(term.toLowerCase());
        });
  /*
         Search from any place in name
         return items.filter((item) => {
         return item.brand.toLowerCase().includes(term);
         })
        */
    };
    /*  ///////////////////// delete search query when choose another category ///////////////
      discharge=()=>{
        this.props.actions.change('')
      };
      */
    filter = (items, filter) => {
        switch (filter) {
            case '/':
                return items;
            case '/all':
                return items;
            case '/home':
                return items.filter((item) => item.bsr_category === "Home & Kitchen");
            case '/health':
                return items.filter((item) => item.bsr_category === "Health & Personal Care");
            case '/baby':
                return items.filter((item) => item.bsr_category === "Baby Products");
            case '/sport':
                return items.filter((item) => item.bsr_category === "Sports & Outdoors");
            default:
                return null;
        }
    };
    render() {
        const visibleItems = this.search(this.state.visible, this.props.term);
        return (
            <Router history={history}>
                    <Search/>
                    <Wrapper>
                        <Category/* discharge={this.discharge} *//>
                        <Products items={ visibleItems }/>
                    </Wrapper>
            </Router>
        );
    }
}

//////////////////////////////////////////----------------/////////////////////////////////////////////////////////

const mapStateToProps = function (state) {
    return {
        term: state.term,
        category: state.category,
        data: state.fetchData.data,
    }
};

const mapDispatchToProps = function (dispatch) {
    return {
        fetchData: () => dispatch(fetchData())
    }
};

App.propTypes = {
    term: PropTypes.string,
    category: PropTypes.string,
    data: PropTypes.array
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

