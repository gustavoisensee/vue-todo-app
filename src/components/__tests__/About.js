import { render } from '@testing-library/vue';
import About from '../About';

describe('About component', () => {
  it('renders the component properly', () => {
    const { getByText, getByTestId } = render(About);

    expect(getByText(/add, edit, delete and mark them as done/i)).toBeInTheDocument();
    expect(getByText(/About this little project!/)).toBeInTheDocument();

    const list = getByTestId('list');
    expect(list.children).toHaveLength(4);
  });
});
