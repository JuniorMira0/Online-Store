import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
import { getProductsFromCategoryAndQuery } from '../services/api';
import ProductCard from '../components/ProductCard';

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
    const data = await getProductsFromCategoryAndQuery(undefined, inputProduct);
    const { results } = data;

    // const filtro = results.filter(({ title }) => title.includes(inputProduct));
    this.setState({
      filterProduct: results,
    });
  }

  buttonAddCart = ({ target }) => {
    this.setState((prevState) => ({
      countCart: prevState.countCart + 1,
    }));
    console.log(<ProductCard />);
  }

  renderProduct = () => {
    const { filterProduct } = this.state;
    if (filterProduct) {
      if (filterProduct.length > 0) {
        return (filterProduct
          .map(({ id, title, price, thumbnail }) => (<ProductCard
            key={ id }
            nameId={ id }
            productName={ title }
            productPrice={ `R$: ${price}` }
            productImage={ thumbnail }
            addCart={ this.buttonAddCart }
          />)));
      }
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  render() {
    const { inputProduct, filterProduct, countCart } = this.state;
    return (
      <div data-testid="home-initial-message">
        <button
          type="submit"
          data-testid="shopping-cart-button"
        >
          <Link to="/shopping-cart"><ShoppingCart countProduct={ countCart } /></Link>
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
      </div>
    );
  }
}

// Requisito feito com Lucas Nascimento e Euclides Comprido.
