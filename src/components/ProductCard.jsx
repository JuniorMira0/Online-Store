import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
// import { getProductId } from '../services/api';

class ProductCard extends React.Component {
  constructor() {
    super();

    this.state = {

    };
  }

  addCart = () => {
    const { productItem } = this.props;
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      const lista = [...local, productItem];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
    } else {
      const lista = [productItem];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
    }
  }

  render() {
    const { productItem } = this.props;
    const { id, title, price, thumbnail } = productItem;

    return (
      <div data-testid="product">
        <h1>{ title }</h1>

        <img src={ thumbnail } alt={ title } />

        <p>{ price }</p>

        <Link
          to={ `/product-detail/${id}` }
          data-testid="product-detail-link"
        >
          Ver os detalhes
        </Link>

        <button
          type="button"
          data-testid="product-add-to-cart"
          onClick={ this.addCart }
          id={ id }
        >
          Adicionar ao carrinho
        </button>
      </div>
    );
  }
}

ProductCard.propTypes = {
  productItem: propTypes.shape({
    title: propTypes.string.isRequired,
    thumbnail: propTypes.string.isRequired,
    price: propTypes.number.isRequired,
    id: propTypes.string.isRequired,
  }).isRequired,
};

export default ProductCard;
