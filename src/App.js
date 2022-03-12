import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';
import ProductDetail from './components/ProductDetail';

// getCategories();
// getProductsFromCategoryAndQuery();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={ Home } />

          <Route path="/product-detail/:id" component={ ProductDetail } />
        </Switch>
      </BrowserRouter>

    </div>
  );
}

export default App;
