import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../Styles/main.scss'; 

interface Product {
  productName: string;
  descriptionShort: string;
  photo: string;
  price: number;
}

const Vitrine: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1); 
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const productsPerPage = 4;

  useEffect(() => {
    axios.get('/produtos.json') 
      .then(response => {
        if (response.data.success) {
          setProducts(response.data.products);
        }
      })
      .catch(error => {
        console.error('Erro ao buscar os produtos:', error);
      });
  }, []);

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = startIndex + productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const nextPage = () => {
    if (endIndex < products.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const previousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="vitrine-container">
      {/* Botão de seta esquerda */}
      <button 
        className="arrow-btn left-arrow" 
        onClick={previousPage} 
        disabled={currentPage === 1}
      >
        &lt;
      </button>

      <div className="vitrine">
        {currentProducts.map((product, index) => (
          <div key={index} className="vitrine-op" onClick={() => handleProductClick(product)}>
            <div className="vitrine-info">
              <img src={product.photo} alt={product.productName} />
              <div>
                <span className="vitrine-nome">{product.productName}</span>
              </div>
              <div>
                <span className="preco">R$ {(product.price * 1.1).toFixed(2)}</span> {/* Preço antigo */}
              </div>
              <div>
                <span className="vitrine-precoAtt">R$ {product.price.toFixed(2)}</span> {/* Preço atualizado */}
              </div>
              <div>
                <span className="vitrine-parcela">ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</span>
              </div>
              <div>
                <span className="vitrine-frete">Frete grátis</span>
              </div>
              <button className="btn-vitrine">COMPRAR</button>
            </div>
          </div>
        ))}
      </div>

      {/* Botão de seta direita */}
      <button 
        className="arrow-btn right-arrow" 
        onClick={nextPage} 
        disabled={endIndex >= products.length}
      >
        &gt;
      </button>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>X</button>
            <div className="modal-details">
              <img src={selectedProduct.photo} alt={selectedProduct.productName} className="modal-img" />
              <div className="modal-info">
                <h2 className='nome-modal'>{selectedProduct.productName}</h2>
                <p className="price">R$ {selectedProduct.price.toFixed(2)}</p>
                <p className='modal-descricao'>{selectedProduct.descriptionShort}</p>
                <p className='modal-link'><a href="#">Veja mais detalhes do produto </a></p>
                <div className="quantity">
                  <button className='btn-menos'>-</button>
                  <span>1</span>
                  <button className='btn-mais'>+</button>
                </div>
                <button className="btn-comprar">COMPRAR</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Vitrine;
