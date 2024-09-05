import React from 'react';

const Categories: React.FC = () => {
  return (
    <div className="menu-opcoes">
      <div className="mennu-opcoes-qd">
        <div className="tecnologia">
          <img src="../img/monitorar-tablet-e-smartohone.png" alt="Tecnologia" />
        </div>
        <span className="texto-rosa">Tecnologia</span>
      </div>
      
      <div>
        <div className="supermercado">
          <img src="../img/supermercados.png" alt="Supermercado" />
        </div>
        <span className="texto">Supermercado</span>
      </div>
      
      <div>
        <div className="bebidas">
          <img src="../img/whiskey.png" alt="Bebidas" />
        </div>
        <span className="texto">Bebidas</span>
      </div>

      <div>
        <div className="ferramentas">
          <img src="../img/ferramentas.png" alt="Ferramentas" />
        </div>
        <span className="texto">Ferramentas</span>
      </div>

      <div>
        <div className="saude">
          <img src="../img/cuidados-de-saude.png" alt="Saúde" />
        </div>
        <span className="texto">Saúde</span>
      </div>

      <div>
        <div className="esporte">
          <img src="../img/corrida.png" alt="Esporte" />
        </div>
        <span className="texto">Esportes e Fitness</span>
      </div>

      <div>
        <div className="moda">
          <img src="../img/moda.png" alt="Moda" />
        </div>
        <span className="texto">Moda</span>
      </div>
    </div>
  );
};

export default Categories;
