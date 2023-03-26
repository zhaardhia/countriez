import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Layout from './components/Layout';

test('renders learn react link', () => {
  render(<Layout children={null} />);
  const linkElement = screen.getByText(/countriez🇮🇩/i);
  expect(linkElement).toBeInTheDocument();
});
