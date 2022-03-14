import React from 'react';
import propTypes from 'prop-types';

export default class ShoppingCart extends React.Component {
  render() {
    const { productName, countProduct } = this.props;
    console.log(countProduct);
    return (
      !countProduct ? (
        <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>
      ) : <h1>{ countProduct }</h1>
    );
  }
}

ShoppingCart.propTypes = {
  productName: propTypes.string.isRequired,
};
// Requisito feito por Junior/ Lucas/ Euclides
