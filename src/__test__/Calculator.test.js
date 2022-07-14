import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import Calculator from '../components/Calculator';

afterEach(cleanup);

it('Calculator renders correctly', () => {
  const { getByTestId } = render(<Calculator />);
  expect(getByTestId('output')).toHaveTextContent('0');
});
it('shows user clicking on a button', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  fireEvent.click(getByText('1'));
  expect(getByTestId('output')).toHaveTextContent('1');
});
it('shows user clicking on a button', () => {
  const { getByTestId, getByText } = render(<Calculator />);
  fireEvent.click(getByText('AC'));
  expect(getByTestId('output')).toHaveTextContent('0');
});
