import React from 'react';
import { getCategories } from '../services/api';

class Category extends React.Component {
  constructor() {
    super();

    this.state = {
      catState: '',
    };
    this.categoryFunc = this.categoryFunc.bind(this);
    this.goState = this.goState.bind(this);
  }

  componentDidMount() {
    this.goState();
    // this.categoryFunc();
  }

  categoryFunc() {
    // this.goState();
    // console.log(catState);
    const { catState } = this.state;
    return (
      <div>
        { catState.map((id) => (
          <label htmlFor={ id.id } key={ id.name }>
            <input
              type="radio"
              name="categoria"
              data-testid="category"
              key={ id.id }
              id={ id.id }
            />
            { id.name }
          </label>
        )) }
      </div>
    );
  }

  async goState() {
    const categoria = await getCategories();
    console.log(categoria);
    this.setState({
      catState: categoria,
    }, () => {
      // this.categoryFunc();
    });
  }

  render() {
    // console.log(this.categoryFunc());
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

export default Category;
