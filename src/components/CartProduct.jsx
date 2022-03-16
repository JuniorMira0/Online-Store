import React from 'react';
import propTypes from 'prop-types';
import { getProductId } from '../services/api';

class CartProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      countProduct: 1,
    };
  }

  getCountLocal = (id) => {
    const local = JSON.parse(localStorage.getItem('cartList'));
    // console.log(local);
    if (local) {
      const a = local.filter((param) => id === param.id);
      this.setState({
        countProduct: a.length,
      });
      return a.length;
    }
  }

  plusButton = async ({ target }) => {
    const data = await getProductId(target.name);
    // console.log(data);
    // console.log(target.name);
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      const lista = [...local, data];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
      // console.log(lista);
    } else {
      const lista = [data];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
      // console.log(lista);
    }
    this.getCountLocal(target.name);
  }

  minusButton = async ({ target }) => {
    // const data = await getProductId(target.name);
    // console.log(data);
    console.log(target.name);
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      // const lista = [...local, data];
      // console.log(data);
      // console.log(lista);
      // console.log(local);
      const indexProduct = local.findIndex((produto) => produto.id === target.name);
      // const um = findIndex(local)
      // console.log(indexProduct);
      local.splice(indexProduct, 1);
      // console.log(indexProduct);
      // console.log(local);
      const localStrig = JSON.stringify(local);
      localStorage.setItem('cartList', localStrig);
    }
    this.getCountLocal(target.name);
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
        <button type="button" name={ id } onClick={ this.plusButton }>+</button>
        <button type="button" name={ id } onClick={ this.minusButton }>-</button>
        {/* <button type="button" id={ id.id } onClick={ this. } >X</button> */}
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
};

export default CartProduct;
