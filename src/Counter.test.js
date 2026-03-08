import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('incrémente le compteur au clic', () => {

  // On affiche le composant
  render(<Counter />);

  // On récupère le bouton +
  const button = screen.getByText('+');

  // On simule un clic
  fireEvent.click(button);

  // On vérifie que le compteur a augmenté
  expect(screen.getByText('Compteur : 1')).toBeInTheDocument();

});