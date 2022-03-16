import React from 'react';

export default class ShoppingCart extends React.Component {
  componentDidMount() {
    // this.getLocal();
    // this.countProduct();
    this.countCart();
    // console.log(a);
    this.getCountLocal();
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

  getCountLocal = (id) => {
    const local = JSON.parse(localStorage.getItem('cartList'));
    console.log(local);
    if (local) {
      const a = local.filter((param) => id === param.id);
      return a.length;
    }
  }

  getLocal = () => {
    const filtro = this.countCart();
    return (
      filtro.map((id, index) => (
        <div key={ index }>
          <h3 data-testid="shopping-cart-product-name">{ id.title }</h3>

          <img src={ id.thumbnail } alt={ id.title } />

          <p>{ `R$: ${id.price}` }</p>

          <p data-testid="shopping-cart-product-quantity">
            { this.getCountLocal(id.id) }
          </p>
        </div>
      ))
    );
  }

  renderProduct = () => {
    const local = JSON.parse(localStorage.getItem('cartList'));
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
