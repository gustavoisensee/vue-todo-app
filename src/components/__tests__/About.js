import { render } from '@testing-library/vue';
import About from '../About';

describe('About', () => {
  it('render the component properly', () => {
    const { getByText } = render(About);

    expect(getByText('About this little project!')).toBeTruthy();
  });
});
