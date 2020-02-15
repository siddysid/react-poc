import React from 'react';
import { action } from '@storybook/addon-actions';
import Counter from './counterComponent';

export default {
  component: Counter,
  title: 'CounterComponent',
};

export const counter = () => <Counter></Counter>;
