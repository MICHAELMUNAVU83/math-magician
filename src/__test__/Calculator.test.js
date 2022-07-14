import React from 'react';
import Calculator from '../components/Calculator';
import {render , cleanup} from "@testing-library/react"
afterEach(cleanup)

it('Calculator renders correctly', () => {
  const{getByTestId} = render (<Calculator/>)
  expect(getByTestId("output")).toHaveTextContent('0')
 
});
