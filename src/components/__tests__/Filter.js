import { render } from '@testing-library/vue';
import store from '../../store';
import Filter from '../Filter';

describe('Filter component', () => {
  it('renders the component with active class', () => {
    const props = { filter: 'all', text: 'All' };
    const { getByText } = render(Filter, { props, store });

    const filterButton = getByText(/All/);
    expect(filterButton).toBeInTheDocument();
    expect(filterButton.className).toContain('filter_active');
  });

  it('renders the component without active class', () => {
    const props = { filter: 'active', text: 'All' };
    const { getByText } = render(Filter, { props, store });

    const filterButton = getByText(/All/);
    expect(filterButton.className).not.toContain('filter_active');
  });
});
