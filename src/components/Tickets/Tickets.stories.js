import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/react";
import Tickets from './Tickets';

const noOp = (e) => {
  e.preventDefault();
};
storiesOf("Tickets", module).add("simple view", () => (
  <div>
    <Tickets />
  </div>
))
