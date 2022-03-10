import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <input
          type="text"
          name="input-search"
          placeholder="Pesquisar produtos"
        />
        <button
          type="submit"
          data-testid="shopping-cart-button"
        >
          <Link to="/shopping-cart" component={ ShoppingCart } />
        </button>
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      </div>
    );
  }
}

// Requisito feito com Lucas Nascimento e Euclides Comprido
