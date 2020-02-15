import React from 'react';
import { action } from '@storybook/addon-actions';
import { storiesOf } from "@storybook/react";
import MobMenu from './MobMenu';

storiesOf("MobMenu", module).add("simple view", () => (
  <div>
    <MobMenu />
  </div>
));
