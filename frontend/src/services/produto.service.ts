import api from './api';

export interface Produto {
  id: number;
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateProdutoData {
  nome: string;
  descricao?: string;
  preco: number;
  estoque: number;
}

export interface UpdateProdutoData extends Partial<CreateProdutoData> {}

export const produtoService = {
  getAll: async (params?: { search?: string }) => {
    const response = await api.get<Produto[]>('/produtos', { params });
    return response.data;
  },

  getById: async (id: number) => {
    const response = await api.get<Produto>(`/produtos/${id}`);
    return response.data;
  },

  create: async (data: CreateProdutoData) => {
    const response = await api.post<Produto>('/produtos', data);
    return response.data;
  },

  update: async (id: number, data: UpdateProdutoData) => {
    const response = await api.put<Produto>(`/produtos/${id}`, data);
    return response.data;
  },

  delete: async (id: number) => {
    const response = await api.delete(`/produtos/${id}`);
    return response.data;
  },
};
