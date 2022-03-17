import React from 'react';
import { Link } from 'react-router-dom';
import CartProduct from '../components/CartProduct';

export default class ShoppingCart extends React.Component {
  constructor() {
    super();
    this.state = {
      cart: [],
    };

    this.removeItem = this.removeItem.bind(this);
  }

  componentDidMount() {
    const local = JSON.parse(localStorage.getItem('cartList')) || [];
    const b = new Set();

    if (local) {
      const cart = local.filter((produto) => {
        const a = b.has(produto.title);
        b.add(produto.title);
        return !a;
      });

      this.setState({
        cart,
      });
    }
  }

  removeItem(title) {
    const { cart } = this.state;
    this.setState({
      cart: cart.filter((item) => item.title !== title),
    });
  }

  render() {
    const { cart } = this.state;

    return (
      <>
        <Link to="/">Home</Link>
        <h1>Carrinho de Compras</h1>

        {cart.length > 0
          ? cart.map((id, index) => (
            <CartProduct
              key={ index }
              title={ id.title }
              image={ id.thumbnail }
              price={ id.price }
              id={ id.id }
              removeItem={ () => this.removeItem(id.title) }
            />
          ))
          : <p data-testid="shopping-cart-empty-message">Seu carrinho está vazio</p>}
      </>
    );
  }
}
