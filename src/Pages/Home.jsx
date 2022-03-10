import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';

export default class Home extends React.Component {
  render() {
    return (
      <div data-testid="home-initial-message">
        <button type="submit" data-testid="shopping-cart-button">
          <Link to="/shopping-cart"><ShoppingCart /></Link>
        </button>
        <input
          type="text"
          placeholder="Pesquise um produto"
          name="input-search"
        />
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      </div>
    );
  }
}

// Requisito feito com Lucas Nascimento e Euclides Comprido
