import React from 'react';
import CartProduct from '../components/CartProduct';
// import { getProductId } from '../services/api';

export default class ShoppingCart extends React.Component {
  componentDidMount() {
    // this.getLocal();
    // this.countProduct();
    this.countCart();
    // console.log(a);
    // this.getCountLocal();
  }

  countCart = () => {
    const b = new Set();
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      const filtro = local.filter((produto) => {
        const a = b.has(produto.title);
        b.add(produto.title);
        // console.log(b);
        return !a;
      });
      return filtro;
    }
  }

  getLocal = () => {
    const filtro = this.countCart();
    // const { countProduct } = this.state;
    return (
      filtro.map((id, index) => (
        <CartProduct
          key={ index }
          title={ id.title }
          image={ id.thumbnail }
          price={ id.price }
          id={ id.id }
        />
      ))
    );
  }

  renderProduct = () => {
    const local = JSON.parse(localStorage.getItem('cartList'));
    // const { countProduct } = this.state;
    // console.log(local);
    if (local && local.length > 0) {
      return this.getLocal();
    }
    return <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>;
  }

  render() {
    return (
      <div>
        <h1>Carrinho de Compras</h1>

        { this.renderProduct() }
      </div>
    );
  }
}
// Requisito feito por Junior/ Lucas/ Euclides
