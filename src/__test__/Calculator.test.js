import renderer from 'react-test-renderer';
import Calculator from '../components/Calculator';

it('Calculator renders correctly', () => {
  const calc = renderer
    .create(<Calculator />)
    .toJSON();
  expect(calc).toMatchSnapshot();
});
