import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import { produtoService, Produto } from '../services/produto.service';
import './Dashboard.css';

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProdutos: 0,
    valorTotalEstoque: 0,
  });
  const [produtosBaixoEstoque, setProdutosBaixoEstoque] = useState<Produto[]>([]);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const produtos = await produtoService.getAll();

      const valorTotalEstoque = produtos.reduce((acc, p) => acc + (p.preco * p.estoque), 0);
      const baixoEstoque = produtos.filter(p => p.estoque < 10);

      setStats({
        totalProdutos: produtos.length,
        valorTotalEstoque,
      });

      setProdutosBaixoEstoque(baixoEstoque);
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
    }
  };

  return (
    <div className="dashboard">
      <h1>Dashboard</h1>

      <div className="stats-grid">
        <Card className="stat-card">
          <div className="stat-icon">📦</div>
          <div className="stat-value">{stats.totalProdutos}</div>
          <div className="stat-label">Total de Produtos</div>
        </Card>

        <Card className="stat-card">
          <div className="stat-icon">💰</div>
          <div className="stat-value">
            R$ {stats.valorTotalEstoque.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}
          </div>
          <div className="stat-label">Valor Total em Estoque</div>
        </Card>
      </div>

      <Card title="Produtos com Estoque Baixo (menos de 10 unidades)">
        {produtosBaixoEstoque.length === 0 ? (
          <p>Nenhum produto com estoque baixo</p>
        ) : (
          <ul className="produto-list">
            {produtosBaixoEstoque.map(produto => (
              <li key={produto.id}>
                <span className="produto-nome">{produto.nome}</span>
                <span className="produto-estoque">Estoque: {produto.estoque}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>

      <div className="dashboard-actions">
        <Link to="/produtos/novo" className="action-button">
          ➕ Adicionar Produto
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
