import React from 'react';
import { render } from '@testing-library/react';
import ErrorApi from './ErrorApi';

describe('ErrorApi', () => {
  it('renders correctly with errorApi true', () => {
    const { getByText } = render(<ErrorApi errorApi={true} textErrorApi="An error occurred" />);
    const errorMessage = getByText('An error occurred');
    expect(errorMessage).toBeTruthy();
  });

  it('renders correctly with errorApi false', () => {
    const { queryByText } = render(<ErrorApi errorApi={false} textErrorApi="An error occurred" />);
    const errorMessage = queryByText('An error occurred');
    expect(errorMessage).not.toBeTruthy();
  });

  it('renders nothing if errorApi is false', () => {
    const { container } = render(<ErrorApi errorApi={false} textErrorApi="An error occurred" />);
    expect(container.firstChild).toBeNull();
  });
});
