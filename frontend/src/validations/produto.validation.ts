import { z } from 'zod';

export const produtoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  descricao: z.string().max(500, 'Descrição muito longa').optional().or(z.literal('')),
  preco: z.number().positive('Preço deve ser positivo'),
  estoque: z.number().int().min(0, 'Estoque não pode ser negativo'),
});

export type ProdutoFormData = z.infer<typeof produtoSchema>;

