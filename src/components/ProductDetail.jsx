import React from 'react';
import PropTypes from 'prop-types';
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
  }

  handleProduct = async () => {
    const { match: { params: { id } } } = this.props; // match contem info sobre como o route path correspondeu a url
    const result = getProductId(id);
    this.setState({
      product: result,
    });
  }

  render() {
    const { product } = this.state;
    const { title, price, thumbnail, attributes } = product;
    return (
      <div>
        <h1> Especificações do produto </h1>
        <h3 data-testid="product-detail-name">{`${title} ${price}`}</h3>
        <img src={ thumbnail } alt={ title } width="80px" />
        {attributes.map((attribute) => (
          <ul key={ attribute.value_id }>
            <li>{`${attribute.name}: ${attribute.value_name}`}</li>
          </ul>
        ))}
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
