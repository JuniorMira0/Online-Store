import React from 'react';
import propTypes from 'prop-types';

class ProductCard extends React.Component {
  render() {
    const { productName, productImage, productPrice } = this.props;
    return (
      <div data-testid="product">
        <ol>
          <h1>{ productName }</h1>
          <img src={ productImage } alt={ productName } />
          <p>{ productPrice }</p>
        </ol>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productName: propTypes.string.isRequired,
  productImage: propTypes.string.isRequired,
  productPrice: propTypes.string.isRequired,
};

export default ProductCard;
