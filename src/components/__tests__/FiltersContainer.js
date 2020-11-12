import { render } from '@testing-library/vue';
import store from '../../store';
import FiltersContainer from '../FiltersContainer';

describe('FiltersContainer component', () => {
  it('renders the component properly', () => {
    const { getByText } = render(FiltersContainer, { store });

    const filterButton = getByText(/All/);
    expect(filterButton).toBeInTheDocument();
    expect(filterButton.className).toContain('filter_active');

    expect(getByText(/Active/)).toBeInTheDocument();
    expect(getByText(/Completed/)).toBeInTheDocument();
    expect(getByText(/0 items/)).toBeInTheDocument();
  });

  it('adds a new item and checks the number of items', async() => {
    await store.commit('handleSubmit', 'test');
    const { getByText } = render(FiltersContainer, { store });

    expect(getByText(/1 items/)).toBeInTheDocument();
  });

  it('changes the filter selected', async() => {
    const { getByText } = render(FiltersContainer, { store });

    const filterButton = getByText(/All/);
    expect(filterButton.className).toContain('filter_active');

    const activeButton = getByText(/Active/)
    expect(activeButton.className).not.toContain('filter_active');

    await store.commit('setFilter', 'active');
    expect(activeButton.className).toContain('filter_active');
  });
});
