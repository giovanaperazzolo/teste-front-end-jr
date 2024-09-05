import React from 'react';

const SubHeader: React.FC = () => {
  return (
    <div id="sub-header">
      <div className="caminho">
        <img src="../img/Caminho1546.png" alt="Caminho 1546" />
        <img src="../img/Caminho1550.png" alt="Caminho 1550" />
        <img src="../img/Caminho1547.png" alt="Caminho 1547" />
        <img src="../img/Caminho1548.png" alt="Caminho 1548" />
        <img src="../img/Caminho1549.png" alt="Caminho 1549" />
      </div>

      <div className="pesquisa">
        <input className='pesquisa-input' placeholder="O que você está buscando?" />
        <div className="lupa">
          <button className='btn-pesquisa'>
            <img src="../img/MagnifyingGlass.png" alt="Search" />
          </button>
        </div>
      </div>

      <div className="icones">
        <img src="../img/Group.png" alt="Group" />
        <img src="../img/Heart.png" alt="Heart" />
        <img src="../img/UserCircle.png" alt="User Circle" />
        <img src="../img/ShoppingCart.png" alt="Shopping Cart" />
      </div>
    </div>
  );
};

export default SubHeader;
