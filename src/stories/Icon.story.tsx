import React from 'react';
import { storiesOf } from '@storybook/react';
import { Icon } from '../components/icons';

storiesOf('Base|Icon', module)
  .add('Simple', () => (
    <div>
      <Icon.Error />
      <Icon.Info />
      <Icon.Success />
      <Icon.Warn />
      <Icon.Loading />
    </div>
  ));