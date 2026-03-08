import React from "react";

function JSXDemo() {
  // Élément JSX simple
  const elementJSX = <h1 className="titre">Bonjour JSX</h1>;

  return (
    <div>
      {/* Affichage du titre JSX */}
      {elementJSX}

      {/* Label lié au champ input */}
      <label htmlFor="champ">Entrez votre nom :</label>

      {/* Champ de saisie */}
      <input id="champ" />
    </div>
  );
}

export default JSXDemo;