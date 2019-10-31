import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from './Button';

storiesOf('Button', module)
  .add('Primary', () => <Button type={'primary'} label={'Primary Button'} />)
  .add('Large Primary', () => (
    <Button type={'primary'} label={'Large Primary Button'} large />
  ));
