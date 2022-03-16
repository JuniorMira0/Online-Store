import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getProductId } from '../services/api';

export default class ProductDetail extends React.Component {
  constructor() {
    super();

    this.state = {
      product: [],
    };
  }

  componentDidMount() {
    this.handleProduct();
    console.log('chamou');
  }

  handleProduct = async () => {
    const { match: { params: { id } } } = this.props; // match contem info sobre como o route path correspondeu a url
    const result = await getProductId(id);
    console.log(result);
    console.log(result.attributes);
    this.setState({
      product: result,
    });
  }

  addCart = async ({ target }) => {
    const data = await getProductId(target.id);
    console.log(data);
    console.log(target);
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local) {
      const lista = [...local, data];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
      console.log(lista);
    } else {
      const lista = [data];
      const localStrig = JSON.stringify(lista);
      localStorage.setItem('cartList', localStrig);
      console.log(lista);
    }
  }

  renderLinkCart = () => {
    const local = JSON.parse(localStorage.getItem('cartList'));
    if (local && local.length > 0) {
      return local.length;
    }
    return <p>Seu carrinho está vazio</p>;
  }

  renderDetail = () => {
    const { product } = this.state;
    const { title, price, thumbnail, attributes, id } = product;
    return (
      <div>
        <Link
          to="/shopping-cart"
        >
          <button
            data-testid="shopping-cart-button"
            type="button"
          >
            { this.renderLinkCart() }
          </button>
          {/* { this.renderLinkCart() } */}

        </Link>

        <h1> Especificações do produto </h1>
        <h3 data-testid="product-detail-name">{`${title} ${price}`}</h3>
        <img src={ thumbnail } alt={ title } width="80px" />
        <button
          data-testid="product-detail-add-to-cart"
          id={ id }
          type="button"
          onClick={ this.addCart }
        >
          Adicionar ao carrinho

        </button>
        {attributes.map((attribute, index) => (
          <ul key={ index }>
            <li>{`${attribute.name}: ${attribute.value_name}`}</li>
          </ul>
        ))}
        {/* { attributes.map((atributos) => console.log(atributos)) } */}
      </div>
    );
  }

  render() {
    const { product } = this.state;
    const { attributes } = product;
    return (
      <div>
        <h1>Detalhes do produto</h1>

        { attributes ? this.renderDetail() : undefined }
      </div>
    );
  }
}

ProductDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
}.isRequired;
