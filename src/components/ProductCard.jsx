import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductId } from '../services/api';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  addCart = async ({ target }) => {
    const data = await getProductId(target.id);
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      const lista = [...local, data];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
    } else {
      const lista = [data];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
    }
  }

  render() {
    const { productName, productImage, productPrice, nameId } = this.props;
    return (
      <div data-testid="product">
        <h1>{ productName }</h1>

        <img src={ productImage } alt={ productName } />

        <p>{ productPrice }</p>

        <Link
          to={ `/product-detail/${nameId}` }
          data-testid="product-detail-link"
        >
          Ver os detalhes
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addCart }
          id={ nameId }
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
  nameId: propTypes.string.isRequired,
};

export default ProductCard;
