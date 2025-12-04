import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Card from '../components/Card';
import Button from '../components/Button';
import { produtoService, CreateProdutoData } from '../services/produto.service';
import { produtoSchema, ProdutoFormData } from '../validations/produto.validation';
import './ProdutoForm.css';

const ProdutoForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState<ProdutoFormData>({
    nome: '',
    descricao: '',
    preco: 0,
    estoque: 0,
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const loadProduto = async () => {
    try {
      const produto = await produtoService.getById(Number(id));
      setFormData({
        nome: produto.nome,
        descricao: produto.descricao || '',
        preco: produto.preco,
        estoque: produto.estoque,
      });
    } catch (error) {
      console.error('Erro ao carregar produto:', error);
      navigate('/produtos');
    }
  };

  useEffect(() => {
    if (id) {
      loadProduto();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? parseFloat(value) || 0 : value,
    }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    try {
      produtoSchema.parse(formData);
      setErrors({});
      return true;
    } catch (error: any) {
      const newErrors: Record<string, string> = {};
      error.errors?.forEach((err: any) => {
        if (err.path) {
          newErrors[err.path[0]] = err.message;
        }
      });
      setErrors(newErrors);
      return false;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) {
      return;
    }

    setLoading(true);
    try {
      const data: CreateProdutoData = {
        nome: formData.nome,
        descricao: formData.descricao || undefined,
        preco: formData.preco,
        estoque: formData.estoque,
      };

      if (id) {
        await produtoService.update(Number(id), data);
      } else {
        await produtoService.create(data);
      }
      navigate('/produtos');
    } catch (error: any) {
      const errorMessage = error.response?.data?.error || 'Erro ao salvar produto';
      if (error.response?.data?.details) {
        const newErrors: Record<string, string> = {};
        error.response.data.details.forEach((detail: any) => {
          if (detail.path) {
            newErrors[detail.path[0]] = detail.message;
          }
        });
        setErrors(newErrors);
      } else {
        alert(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="produto-form">
      <h1>{id ? 'Editar Produto' : 'Novo Produto'}</h1>
      
      <Card>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="nome">Nome *</label>
            <input
              type="text"
              id="nome"
              name="nome"
              value={formData.nome}
              onChange={handleChange}
              className={errors.nome ? 'error' : ''}
            />
            {errors.nome && <span className="error-message">{errors.nome}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="descricao">Descrição</label>
            <textarea
              id="descricao"
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              rows={4}
              className={errors.descricao ? 'error' : ''}
            />
            {errors.descricao && <span className="error-message">{errors.descricao}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="preco">Preço *</label>
              <input
                type="number"
                id="preco"
                name="preco"
                value={formData.preco}
                onChange={handleChange}
                step="0.01"
                min="0"
                className={errors.preco ? 'error' : ''}
              />
              {errors.preco && <span className="error-message">{errors.preco}</span>}
            </div>

            <div className="form-group">
              <label htmlFor="estoque">Estoque *</label>
              <input
                type="number"
                id="estoque"
                name="estoque"
                value={formData.estoque}
                onChange={handleChange}
                min="0"
                className={errors.estoque ? 'error' : ''}
              />
              {errors.estoque && <span className="error-message">{errors.estoque}</span>}
            </div>
          </div>

          <div className="form-actions">
            <Button type="submit" disabled={loading}>
              {loading ? 'Salvando...' : id ? 'Atualizar' : 'Criar'}
            </Button>
            <Button type="button" variant="secondary" onClick={() => navigate('/produtos')}>
              Cancelar
            </Button>
          </div>
        </form>
      </Card>
    </div>
  );
};

export default ProdutoForm;
