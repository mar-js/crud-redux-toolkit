import { render } from '@testing-library/react';
import { Provider } from 'react-redux';

import { STORE } from '../../redux/store'

import { App } from './';

test('renders learn react link', () => {
  const { getByText } = render(
    <Provider store={STORE}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
