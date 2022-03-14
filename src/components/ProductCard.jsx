import React from 'react';
import propTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productName, productImage, productPrice, addCart } = this.props;
    return (
      <div data-testid="product">
        <h1>{ productName }</h1>

        <img src={ productImage } alt={ productName } />

        <p>{ productPrice }</p>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ addCart }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: propTypes.string.isRequired,
  productImage: propTypes.string.isRequired,
  productPrice: propTypes.string.isRequired,
  addCart: propTypes.func.isRequired,
};

export default ProductCard;
