import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/react";
import ProductList from './ProductList';

const noOp = (e) => {
  e.preventDefault();
};
storiesOf("ProductList", module).add("simple view", () => (
  <div>
    <ProductList />
  </div>
))
.add('submProductListitted', () => (
  <div><ProductList state="submitted" onSubmit={noOp} /></div>
));
