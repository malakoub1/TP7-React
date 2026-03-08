import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('affiche le message correct', () => {

  // On affiche le composant avec le nom "Alice"
  render(<Greeting name="Alice" />);

  // On vérifie que le texte apparaît bien dans la page
  expect(screen.getByText('Bonjour, Alice')).toBeInTheDocument();

});