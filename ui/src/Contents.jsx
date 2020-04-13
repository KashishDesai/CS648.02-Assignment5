import React from 'react';

import {
  Switch, Route, Redirect,
} from 'react-router-dom';

import ProductList from './ProductList.jsx';
import ProductEdit from './ProductEdit.jsx';
import ProductImage from './ProductImage.jsx';

const NotFound = () => <h1>Page not found</h1>;

const MyProductImage = () => (
  <ProductImage
    image_url={window.location.pathname}
  />
);

export default function Contents() {
  return (
    <div>
      <Switch>
        <Redirect exact from="/" to="/products" />
        <Route path="/products" component={ProductList} />
        <Route path="/edit/:id" component={ProductEdit} />
        <Route path="/image/:id" component={ProductImage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}
