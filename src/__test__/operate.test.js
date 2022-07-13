import calculate from '../logic/calculate';

it('checks calculate', () => {
  const object1 = {
    total: null,
    next: null,
    operation: null,
  };

  expect(calculate(object1, 'AC')).toEqual({
    total: null,
    next: null,
    operation: null,
  });
});
