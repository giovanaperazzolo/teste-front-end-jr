import React, { useEffect, useState } from 'react';
import '../Styles/main.scss';

const ProdutosRelacionadosVitrine: React.FC = () => {
    return (
        <div>
            <div className="produtosRel">
                <div className='parceiros-container'>
                    <img src='../img/MaskGroup.png'></img>
                    <div className="parceiros">
                        <span className="parceiros-maior">Parceiros</span>
                        <span className="parceiros-menor"> Lorem ipsum dolor sit amet, consectetur</span>
                        <button className='btn-parceiros'>CONFIRA</button>
                    </div>
                </div>

                <div className='parceiros-container'>
                    <img src='../img/MaskGroup.png'></img>
                    <div className="parceiros">
                        <span className="parceiros-maior">Parceiros</span>
                        <span className="parceiros-menor"> Lorem ipsum dolor sit amet, consectetur</span>
                        <button className='btn-parceiros'>CONFIRA</button>
                    </div>
                </div>
            </div>

            <div className="relacionados">
                <hr className="linha" />
                <span className="produto-text">Produtos relacionados</span>
                <hr className="linha" />

            </div>

            <div className='ver-todos'>
                <span>Ver todos</span>
            </div>

            <div className="produtosRel">
                <div className='parceiros-container'>
                    <img src='../img/MaskGroup.png'></img>
                    <div className="parceiros">
                        <span className="parceiros-maior">Parceiros</span>
                        <span className="parceiros-menor"> Lorem ipsum dolor sit amet, consectetur</span>
                        <button className='btn-parceiros'>CONFIRA</button>
                    </div>
                </div>

                <div className='parceiros-container'>
                    <img src='../img/MaskGroup.png'></img>
                    <div className="parceiros">
                        <span className="parceiros-maior">Parceiros</span>
                        <span className="parceiros-menor"> Lorem ipsum dolor sit amet, consectetur</span>
                        <button className='btn-parceiros'>CONFIRA</button>
                    </div>
                </div>
            </div>

            <div className='marcas'>
                <span>Navegue por marcas</span>
            </div>

            <div className='marcas-menu'>
                <div className="menu-logo">
                    <img src="../img/Caminho1546.png" alt="Caminho 1546" />
                    <img src="../img/Caminho1550.png" alt="Caminho 1550" />
                    <img src="../img/Caminho1547.png" alt="Caminho 1547" />
                    <img src="../img/Caminho1548.png" alt="Caminho 1548" />
                    <img src="../img/Caminho1549.png" alt="Caminho 1549" />
                </div>

                <div className="menu-logo">
                    <img src="../img/Caminho1546.png" alt="Caminho 1546" />
                    <img src="../img/Caminho1550.png" alt="Caminho 1550" />
                    <img src="../img/Caminho1547.png" alt="Caminho 1547" />
                    <img src="../img/Caminho1548.png" alt="Caminho 1548" />
                    <img src="../img/Caminho1549.png" alt="Caminho 1549" />
                </div>

                <div className="menu-logo">
                    <img src="../img/Caminho1546.png" alt="Caminho 1546" />
                    <img src="../img/Caminho1550.png" alt="Caminho 1550" />
                    <img src="../img/Caminho1547.png" alt="Caminho 1547" />
                    <img src="../img/Caminho1548.png" alt="Caminho 1548" />
                    <img src="../img/Caminho1549.png" alt="Caminho 1549" />
                </div>

                <div className="menu-logo">
                    <img src="../img/Caminho1546.png" alt="Caminho 1546" />
                    <img src="../img/Caminho1550.png" alt="Caminho 1550" />
                    <img src="../img/Caminho1547.png" alt="Caminho 1547" />
                    <img src="../img/Caminho1548.png" alt="Caminho 1548" />
                    <img src="../img/Caminho1549.png" alt="Caminho 1549" />
                </div>

                <div className="menu-logo">
                    <img src="../img/Caminho1546.png" alt="Caminho 1546" />
                    <img src="../img/Caminho1550.png" alt="Caminho 1550" />
                    <img src="../img/Caminho1547.png" alt="Caminho 1547" />
                    <img src="../img/Caminho1548.png" alt="Caminho 1548" />
                    <img src="../img/Caminho1549.png" alt="Caminho 1549" />
                </div>

                <div className="arrow-circle">
                        <span className="arrow">&gt;</span>
                </div>
            </div>
        </div>

    );
};

export default ProdutosRelacionadosVitrine;