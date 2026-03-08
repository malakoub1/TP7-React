function DataLoader({ render }) {
  // Données simples pour l'exemple
  const data = ['Malak', 'Salma', 'Aya'];

  return <div>{render(data)}</div>;
}

export default DataLoader;