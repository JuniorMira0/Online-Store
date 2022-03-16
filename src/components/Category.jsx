import React from 'react';
import propTypes from 'prop-types';
import { getCategories } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      catState: '',
      // categoryName: '',
    };
    this.categoryFunc = this.categoryFunc.bind(this);
    this.goState = this.goState.bind(this);
  }

  componentDidMount() {
    this.goState();
    // this.categoryFunc();
  }

  // stateCategory = ({ target }) => {
  //   console.log(target);
  //   this.setState({
  //     categoryName: target.id,
  //   }, () => {
  //     this.productsFromCategory();
  //   });
  // }

  // productsFromCategory = async () => {
  //   const { categoryName } = this.state;
  //   const data = await getCategoryFromId(categoryName);
  //   const { results } = data;
  //   console.log(results);
  // }

  categoryFunc() {
    // this.goState();
    // console.log(catState);
    const { catState } = this.state;
    const { categoryFuncProp } = this.props;
    return (
      <div>
        { catState.map((id) => (
          <label htmlFor={ id.id } key={ id.name }>
            <input
              type="radio"
              name="category"
              data-testid="category"
              key={ id.id }
              id={ id.id }
              onClick={ () => categoryFuncProp(id.id) }
            />
            { id.name }
          </label>
        )) }
      </div>
    );
  }

  async goState() {
    const categoria = await getCategories();
    this.setState({
      catState: categoria,
    }, () => {
      // this.categoryFunc();
    });
  }

  render() {
    const { catState } = this.state;
    return (
      <div>
        <h1>Categorias</h1>

        { catState ? this.categoryFunc() : undefined }
        {/* { this.goState() } */}
      </div>
    );
  }
}

Category.propTypes = {
  categoryFuncProp: propTypes.func.isRequired,
};

export default Category;
