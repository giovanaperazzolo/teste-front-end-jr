import React from 'react';
import Header from './Components/Header';
import SubHeader from './Components/SubHeader';
import Menu from './Components/Menu';
import Promotions from './Components/Promotions';
import Categories from './Components/Categories';
import RelatedProducts from './Components/RelatedProdructs';
import ProductTable from './Components/ProductTable';
import Vitrine from './Components/Vitrine';
import ProdutosRelacionadosVitrine from './Components/ProdutosRelacionadosVitrine';
import Footer from './Components/Footer';
import './Styles/main.scss';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <SubHeader />
      <Menu />
      <Promotions />
      <Categories />
      <RelatedProducts />
      <ProductTable />
      <Vitrine />
      <ProdutosRelacionadosVitrine />
      <Footer />
    </div>
  );
};

export default App;
