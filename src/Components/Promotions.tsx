import React from 'react';

const Promotions: React.FC = () => {
  return (
    <div className="promocoes">
      <img src='/img/Rectangle.png' alt="Promoção" />
      <div className="promocoes-text">
        <p>Venha conhecer nossas</p>
        <p>promoções</p>
        <span>50% Off nos produtos</span>
        <button className="btn-produtos">Ver produto</button>
      </div>
    </div>
  );
};

export default Promotions;
