import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputProduct: '',
      filterProduct: '',
    };
  }

  onChangeInput = ({ target }) => {
    const { value } = target;
    this.setState({
      inputProduct: value,
    });
  }

  buttonProduct = async () => {
    const { inputProduct } = this.state;
    const data = await getProductsFromCategoryAndQuery(undefined, inputProduct);
    const { results } = data;

    // const filtro = results.filter(({ title }) => title.includes(inputProduct));
    this.setState({
      filterProduct: results,
    });
  }

  renderProduct = () => {
    const { filterProduct } = this.state;
    if (filterProduct) {
      if (filterProduct.length > 0) {
        return (filterProduct
          .map(({ id, title, price, thumbnail }) => (
            <Link
              to={ `/product-detail/${id}` }
              data-testid="product-detail-link"
              key={ id }
            >
              <ProductCard
                productName={ title }
                productPrice={ `R$: ${price}` }
                productImage={ thumbnail }
              />
            </Link>
          )));
      }
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  render() {
    const { inputProduct, filterProduct } = this.state;
    return (
      <div data-testid="home-initial-message">
        <button
          type="submit"
          data-testid="shopping-cart-button"
        >
          <Link to="/shopping-cart"><ShoppingCart /></Link>
        </button>
        <input
          type="text"
          placeholder="Pesquise um produto"
          name="input-search"
          data-testid="query-input"
          value={ inputProduct }
          onChange={ this.onChangeInput }
        />
        <button
          type="button"
          data-testid="query-button"
          onClick={ this.buttonProduct }
        >
          Pesquisar
        </button>
        <h1>Digite algum termo de pesquisa ou escolha uma categoria.</h1>

        { filterProduct ? this.renderProduct() : undefined}

        <Category />
      </div>
    );
  }
}

// Requisito feito com Lucas Nascimento e Euclides Comprido.
