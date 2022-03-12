import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Category from './components/Category';
import ProductDetail from './components/ProductDetail';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

// getCategories();
// getProductsFromCategoryAndQuery();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/product-detail:id" component={ ProductDetail } />
          <Route path="/" exact component={ Home } />
        </Switch>
      </BrowserRouter>

      <Category />
    </div>
  );
}

export default App;
