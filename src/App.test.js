// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ChainOrder title', () => {
    render(<App />);
    const titleElement = screen.getByText(/ChainOrder/i);
    expect(titleElement).toBeInTheDocument();
});
