import renderer from 'react-test-renderer';
import About from '../components/About';

it('Calculator renders correctly', () => {
  const tree = renderer
    .create(<About />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});