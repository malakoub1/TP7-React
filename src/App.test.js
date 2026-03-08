import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre principal', () => {
  render(<App />);
  const titleElement = screen.getByText('TP JSX et Composition');
  expect(titleElement).toBeInTheDocument();
});