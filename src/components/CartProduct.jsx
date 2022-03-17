import React from 'react';
import propTypes from 'prop-types';
import { getProductId } from '../services/api';

class CartProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      countProduct: 1,
    };

    this.getCountLocal = this.getCountLocal.bind(this);
  }

  componentDidMount() {
    this.getCountLocal();
  }

  getCountLocal() {
    const { id } = this.props;
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      console.log(local);
      const a = local.filter((param) => id === param.id).length;
      console.log(a);
      this.setState({
        countProduct: a,
      });
      console.log(this.state.countProduct);
      // return a.length;
    }
  }

  plusButton = async ({ target }) => {
    const data = await getProductId(target.name);
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
    this.getCountLocal();
  }

  minusButton = async ({ target }) => {
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      const indexProduct = local.findIndex((produto) => produto.id === target.name);
      local.splice(indexProduct, 1);
      const localStrig = JSON.stringify(local);
      localStorage.setItem('cartList', localStrig);
    }
    this.getCountLocal();
  }

  render() {
    const { title, image, price, id } = this.props;
    const { countProduct } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ image } alt={ title } />
        <p>{ `R$: ${price}` }</p>
        <p data-testid="shopping-cart-product-quantity">
          { countProduct }
        </p>

        <button
          type="button"
          name={ id }
          onClick={ this.plusButton }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          name={ id }
          onClick={ this.minusButton }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        {/* <button type="button" id={ id.id } onClick={ this. } >X</button> */}
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
};

export default CartProduct;
