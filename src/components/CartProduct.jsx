import React from 'react';
import propTypes from 'prop-types';

class CartProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      quantity: 0,
    };

    this.addItem = this.addItem.bind(this);
    this.subItem = this.subItem.bind(this);
  }

  componentDidMount() {
    const { id } = this.props;
    const local = JSON.parse(localStorage.getItem('cartList'));
    const items = local.filter((param) => id === param.id);
    this.setState({
      quantity: items.length,
    });
  }

  async addItem() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity + 1,
    });
  }

  async subItem() {
    const { quantity } = this.state;
    this.setState({
      quantity: quantity - 1,
    });
  }

  render() {
    const { title, image, price, id, removeItem } = this.props;
    const { quantity } = this.state;
    return (
      <div>
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <img src={ image } alt={ title } />
        <p>{ `R$: ${price}` }</p>
        <p data-testid="shopping-cart-product-quantity">
          { quantity }
        </p>

        <button
          type="button"
          name={ id }
          onClick={ this.addItem }
          data-testid="product-increase-quantity"
        >
          +
        </button>
        <button
          type="button"
          name={ id }
          onClick={ quantity === 0 ? removeItem : this.subItem }
          data-testid="product-decrease-quantity"
        >
          -
        </button>
        <button
          type="button"
          id={ id.id }
          onClick={ removeItem }
        >
          X
        </button>
      </div>
    );
  }
}

CartProduct.propTypes = {
  title: propTypes.string.isRequired,
  image: propTypes.string.isRequired,
  price: propTypes.number.isRequired,
  id: propTypes.string.isRequired,
  removeItem: propTypes.func.isRequired,
};

export default CartProduct;
