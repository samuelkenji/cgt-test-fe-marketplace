import { render, screen } from '@testing-library/react';
import App from './App';
import catalog from './catalog.json'

describe("Renders homepage", () => {
  test('renders shop header', () => {
    render(<App />);
    const header = screen.getByText(/3D Shop/i);
    expect(header).toBeInTheDocument();
  });
  
  test('renders products from catalog', () => {
    render(<App />);
    const product = screen.getAllByText(/Go to product/i)
    expect(product).toHaveLength(catalog.products.length);
  });
})
