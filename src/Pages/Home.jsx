import React from 'react';
import { Link } from 'react-router-dom';
import ShoppingCart from './ShoppingCart';
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
      countState: '',
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

    // const filtro = results.filter(({ title }) => title.includes(inputProduct));
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
          .map(({ id, title, price, thumbnail }) => (
            <Link
              to={ `/product-detail/${id}` }
              data-testid="product-detail-link"
              key={ id }
            >
              <ProductCard
                key={ id }
                nameId={ id }
                productName={ title }
                productPrice={ `R$: ${price}` }
                productImage={ thumbnail }
                addCart={ this.buttonAddCart }
              />
            </Link>
          )));
      }
      return <p>Nenhum produto foi encontrado</p>;
    }
  }

  productsFromCategory = async (id) => {
    // const { categoryName } = this.state;
    const data = await getCategoryFromId(id);
    const { results } = data;
    console.log(results);
    this.setState({
      filterProduct: results,
    });
  }

  render() {
    const { inputProduct, filterProduct, countCart, countState } = this.state;
    console.log(countCart);
    return (
      <div data-testid="home-initial-message">
        <button
          type="submit"
          data-testid="shopping-cart-button"
        >
          {/* <Link to="/shopping-cart">
            { countCart === 0
              ? <p>Seu carrinho está vazio</p>
              : countCart } */}

          <Link
            to={ {
              pathname: '/shopping-cart',
              state: countState,
            } }
          >
            { countCart === 0
              ? <ShoppingCart countProduct={ countCart } />
              : countCart }

          </Link>
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

        <Category categoryFuncProp={ this.productsFromCategory } />

        { filterProduct ? this.renderProduct() : undefined}
      </div>
    );
  }
}

// Requisito feito com Lucas Nascimento e Euclides Comprido.
