import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchProducts } from './actions/fetch';

import Product from './components/product-component/product';
import '../stylesheets/listingPage.scss';

class HomePage extends Component {

    componentDidMount() {
      this.props.dispatch(fetchProducts());
    };

    render(){
        return (
            <main>
              <Product data={this.props.products} />
            </main>
        );
    }
};

const mapStateToProps = state => {
  return {
    products: state.productReducer
  };
};

export default connect(mapStateToProps)(HomePage);
