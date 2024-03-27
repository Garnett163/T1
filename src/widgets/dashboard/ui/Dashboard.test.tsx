import { render } from '@testing-library/react';
import styles from './Dashboard.module.css';
import Dashboard from './Dashboard';
import React from 'react';

describe('Dashboard', () => {
  it('renders Dashboard component without crashing', () => {
    render(<Dashboard />);
  });

  it('renders three DeliveryCard components', () => {
    const { container } = render(<Dashboard />);
    const deliveryCards = container.getElementsByClassName(styles.deliveryCard);
    expect(deliveryCards.length).toBe(3);
  });
});
