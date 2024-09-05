import React from 'react';
import '../Styles/main.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section sobre-nos">
          <h3>Sobre nós</h3>
          <ul>
            <li><a href="#">CONHEÇA</a></li>
            <li><a href="#">COMO COMPRAR</a></li>
            <li><a href="#">INDICAÇÃO E DESCONTO</a></li>
          </ul>
          <div className="footer-social">
            <a href="#"><img src="../img/023-facebook.png" alt="Facebook" /></a>
            <a href="#"><img src="../img/044-instagram.png" alt="Instagram" /></a>
            <a href="#"><img src="../img/116-youtube.png" alt="YouTube" /></a>
          </div>
        </div>

        <div className="footer-section informacoes-uteis">
          <h3>INFORMAÇÕES ÚTEIS</h3>
          <ul>
            <li><a href="#">FALE CONOSCO</a></li>
            <li><a href="#">DÚVIDAS</a></li>
            <li><a href="#">PRAZOS DE ENTREGA</a></li>
            <li><a href="#">FORMAS DE PAGAMENTO</a></li>
            <li><a href="#">POLÍTICA DE PRIVACIDADE</a></li>
            <li><a href="#">TROCAS E DEVOLUÇÕES</a></li>
          </ul>
        </div>

        <div className="footer-section formas-pagamento">
          <h3>FORMAS DE PAGAMENTO</h3>
          <div className="payment-icons">
            <img src="../img/Group1351.png" alt="Visa" />
            <img src="../img/elo.png" alt="Mastercard" />
            <img src="../img/alelo.png" alt="Elo" />
            <img src="../img/dinners.png" alt="Alelo" />
            <img src="../img/ifood.png" alt="Pix" />
            <img src="../img/mastercard.png" alt="Ticket" />
            <img src="../img/pix.png" alt="Alelo" />
            <img src="../img/amex.png" alt="Pix" />
            <img src="../img/ticket.png" alt="Ticket" />
            <img src="../img/sodexo.png" alt="Ticket" />
          </div>
        </div>
        
        <div className="footer-section novidades">
          <h3>CADASTRE-SE E RECEBA NOSSAS <strong>NOVIDADES E PROMOÇÕES</strong></h3>
          <p>Excepteur sint occaecat cupidatat non ent, sunt in culpa qui officia lorem ipsum</p>
          <div className="newsletter-signup">
            <input type="email" placeholder="Seu e-mail" />
            <button>OK</button>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-text">
          <p>Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus respectivos donos.</p>
          <span>É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.</span>
        </div>
        <div className="footer-logos">
          <img src="../img/Grupo1999.png" alt="Econverse" />
          <img src="../img/Group35.png" alt="VTEX" />
        </div>
      </div>

    </footer>
  );
};

export default Footer;
