import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Products } from './components/products-card/products';
import { ProductsDetail } from './components/products-detail-card/products-detail-card';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Navbar />} />
        <Route path="/products" element={ <Products products={[]} />} />
        <Route path="/detail" element={ <ProductsDetail />} />
      </Routes>

    </Router>
  );
}

export default App;
