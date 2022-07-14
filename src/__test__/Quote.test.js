import renderer from 'react-test-renderer';
import Quote from '../components/Quote';

it('Qoute renders correctly', () => {
  const quotetree = renderer
    .create(<Quote />)
    .toJSON();
  expect(quotetree).toMatchSnapshot();
});
