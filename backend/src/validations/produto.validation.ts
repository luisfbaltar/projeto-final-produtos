import { z } from 'zod';

export const createProdutoSchema = z.object({
  nome: z.string().min(1, 'Nome é obrigatório').max(100, 'Nome muito longo'),
  descricao: z.string().max(500, 'Descrição muito longa').optional(),
  preco: z.number().positive('Preço deve ser positivo'),
  estoque: z.number().int().min(0, 'Estoque não pode ser negativo').default(0),
});

export const updateProdutoSchema = createProdutoSchema.partial();

export type CreateProdutoInput = z.infer<typeof createProdutoSchema>;
export type UpdateProdutoInput = z.infer<typeof updateProdutoSchema>;

