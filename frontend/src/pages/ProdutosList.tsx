import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { produtoService, Produto } from '../services/produto.service';
import './ProdutosList.css';

const ProdutosList = () => {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const loadProdutos = async () => {
    try {
      setLoading(true);
      const params = search ? { search } : {};
      const data = await produtoService.getAll(params);
      setProdutos(data);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadProdutos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  const handleDelete = async (id: number) => {
    if (!confirm('Tem certeza que deseja deletar este produto?')) return;

    try {
      await produtoService.delete(id);
      loadProdutos();
    } catch (error: any) {
      alert(error.response?.data?.error || 'Erro ao deletar produto');
    }
  };

  return (
    <div className="produtos-list">
      <div className="page-header">
        <h1>Produtos</h1>
        <Link to="/produtos/novo">
          <Button>➕ Novo Produto</Button>
        </Link>
      </div>

      <Card>
        <div className="filters">
          <input
            type="text"
            placeholder="Buscar produtos por nome ou descrição..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="filter-input"
          />
        </div>
      </Card>

      {loading ? (
        <Card>
          <p>Carregando...</p>
        </Card>
      ) : produtos.length === 0 ? (
        <Card>
          <p>Nenhum produto encontrado</p>
        </Card>
      ) : (
        <div className="produtos-grid">
          {produtos.map(produto => (
            <Card key={produto.id} className="produto-card">
              <div className="produto-header">
                <h3>{produto.nome}</h3>
              </div>
              <p className="produto-descricao">{produto.descricao || 'Sem descrição'}</p>
              <div className="produto-info">
                <div className="info-item">
                  <span className="info-label">Preço:</span>
                  <span className="preco">R$ {produto.preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}</span>
                </div>
                <div className="info-item">
                  <span className="info-label">Estoque:</span>
                  <span className={produto.estoque < 10 ? 'estoque-baixo' : ''}>
                    {produto.estoque} unidades
                  </span>
                </div>
              </div>
              <div className="produto-actions">
                <Link to={`/produtos/editar/${produto.id}`}>
                  <Button variant="secondary">✏️ Editar</Button>
                </Link>
                <Button variant="danger" onClick={() => handleDelete(produto.id)}>
                  🗑️ Deletar
                </Button>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProdutosList;
