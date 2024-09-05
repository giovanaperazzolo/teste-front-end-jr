import React from 'react';
import '../Styles/main.scss';

const Header: React.FC = () => {
  return (
    <div id="header">
      <div id="security">
        <img src="../img/security.png" width="20px" height="20px" alt="Security" />
        <div className="compra-segura">
          <span className="compra">Compra</span>
          <span className="segura"> 100% segura</span>
        </div>
      </div>

      <div id="delivery">
        <img src="../img/truck.png" width="20px" height="20px" alt="Truck" />
        <div className="frete-gratis">
          <span className="frete">Frete grátis</span>
          <span className="gratis"> acima de R$200</span>
        </div>
      </div>

      <div id="card">
        <img src="../img/creditCard.png" width="20px" height="20px" alt="Credit Card" />
        <div className="parcele-texto">
          <span className="parcele">Parcele</span>
          <span className="suas-compras"> suas compras</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
