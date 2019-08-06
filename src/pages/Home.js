import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAll } from '../store/actions/stock';

class Home extends Component{
  state = {
    
  }

  render(){
    return (
      <div>
        HOME
      </div>

    )
  }
}

const mapStateToProps = state => {
    return {
      stock: state.stock,
      cartProducts: state.cart.products,
      isLoading: state.ui.isLoading,
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      onGetProducts: () => dispatch(getAll())
    }
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Home)
