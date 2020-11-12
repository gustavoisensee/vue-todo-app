import { render } from '@testing-library/vue';
import Header from '../Header';

describe('Header component', () => {
  it('renders the component properly', () => {
    const props = { msg: 'Test' };
    const { getByText, queryByText } = render(Header, { props });

    expect(getByText(/Test/)).toBeInTheDocument();
    expect(queryByText(/Blablabla/)).toBeFalsy();
  });
});
