import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ProdutosList from './pages/ProdutosList';
import ProdutoForm from './pages/ProdutoForm';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/produtos" element={<ProdutosList />} />
          <Route path="/produtos/novo" element={<ProdutoForm />} />
          <Route path="/produtos/editar/:id" element={<ProdutoForm />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;

