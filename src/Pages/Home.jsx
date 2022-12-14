import React from 'react';
import { Link } from 'react-router-dom';
import { getProductsFromQuery, getCategoryFromId } from '../services/api';
import ProductCard from '../components/ProductCard';
import Category from '../components/Category';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      inputProduct: '',
      filterProduct: '',
      countCart: 0,
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
    const data = await getProductsFromQuery(inputProduct);
    const { results } = data;

    this.setState({
      filterProduct: results,
    });
  }

  buttonAddCart = () => {
    this.setState((prevState) => ({
      countCart: prevState.countCart + 1,
    }));
  }

  renderProduct = () => {
    const { filterProduct } = this.state;
    if (filterProduct) {
      if (filterProduct.length > 0) {
        return (filterProduct
          .map((product, index) => (
            <ProductCard
              key={ index }
              productItem={ product }
            />
          )));
      }
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  productsFromCategory = async (id) => {
    const data = await getCategoryFromId(id);
    const { results } = data;
    this.setState({
      filterProduct: results,
    });
  }

  renderLinkCart = () => {
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local && local.length > 0) {
      return local.length;
    }
    return <p>Seu carrinho está vazio</p>;
  }

  render() {
    const { inputProduct, filterProduct } = this.state;
    return (
      <div data-testid="home-initial-message">
        <Link
          to="/shopping-cart"
        >
          <button
            type="button"
            data-testid="shopping-cart-button"
          >
            { this.renderLinkCart() }

          </button>
        </Link>

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

        <Category categoryFuncProp={ this.productsFromCategory } />

        { filterProduct ? this.renderProduct() : undefined}

      </div>
    );
  }
}
