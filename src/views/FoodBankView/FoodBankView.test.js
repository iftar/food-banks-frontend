import React from 'react';
import { render } from '@testing-library/react';
import FoodBankView from './FoodBankView';

test('renders learn react link', () => {
  const { getByText } = render(<FoodBankView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
