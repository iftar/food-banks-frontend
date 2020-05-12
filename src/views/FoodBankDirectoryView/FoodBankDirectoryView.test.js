import React from 'react';
import { render } from '@testing-library/react';
import FoodBankDirectoryView from './FoodBankDirectoryView';

test('renders learn react link', () => {
  const { getByText } = render(<FoodBankDirectoryView />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
