import { render, screen } from '@testing-library/react';
import React from 'react';

import TestComponentForTest from './TestComponentForTest';

test('renders greeting message', () => {
  render(<TestComponentForTest />);
  expect(screen.getByText('yoon0cean starterKit')).toBeDefined();
});
