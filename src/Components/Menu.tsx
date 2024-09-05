import React from 'react';

const Menu: React.FC = () => {
  return (
    <div className="menu">
      <span>TODAS AS CATEGORIAS</span>
      <span>SUPERMERCADO</span>
      <span>LIVROS</span>
      <span>MODA</span>
      <span>LANÇAMENTOS</span>
      <span className="oferta">OFERTA DO DIA</span>
      <div className="assinatura">
        <img src="../img/CrownSimple.png" alt="Assinatura" />
        <span>ASSINATURA</span>
      </div>
    </div>
  );
};

export default Menu;
