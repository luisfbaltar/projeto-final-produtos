import { Router } from 'express';
import { createProduto, getAllProdutos, getProdutoById, updateProduto, deleteProduto } from '../controllers/produto.controller';
import { validateRequest } from '../middlewares/validate.middleware';
import { createProdutoSchema, updateProdutoSchema } from '../validations/produto.validation';

const router = Router();

router.get('/', getAllProdutos);
router.get('/:id', getProdutoById);
router.post('/', validateRequest(createProdutoSchema), createProduto);
router.put('/:id', validateRequest(updateProdutoSchema), updateProduto);
router.delete('/:id', deleteProduto);

export default router;

