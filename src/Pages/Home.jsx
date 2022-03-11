import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import { getCategories, getProductsFromCategoryAndQuery } from '../services/api';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputProduct: '',
    };
  }

  onChangeInput = ({target}) => {
    const { value } = target;
    this.setState ({
      inputProduct: value
    })
  }

  render() {
    const { inputProduct } = this.state;
    return (
      <div data-testid="home-initial-message">
        <button type="submit" data-testid="shopping-cart-button">
          <Link to="/shopping-cart"><ShoppingCart /></Link>
        </button>
        <input
          type="text"
          placeholder="Pesquise um produto"
          name="input-search"
          value={ inputProduct }
          onChange={ this.onChangeInput }
        />
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>
      </div>
    );
  }
}

// Requisito feito com Lucas Nascimento e Euclides Comprido
