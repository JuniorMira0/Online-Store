import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './Pages/Home';
import ShoppingCart from './Pages/ShoppingCart';
// import { getCategories, getProductsFromCategoryAndQuery } from './services/api';

// getCategories();
// getProductsFromCategoryAndQuery();

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route path="/shopping-cart" component={ ShoppingCart } />

          <Route path="/" exact component={ Home } />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
