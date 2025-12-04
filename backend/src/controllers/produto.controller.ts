import { Request, Response } from 'express';
import prisma from '../lib/prisma';

export const getAllProdutos = async (req: Request, res: Response) => {
  try {
    const { search } = req.query;
    
    const where: any = {};
    
    if (search) {
      where.OR = [
        { nome: { contains: search as string, mode: 'insensitive' } },
        { descricao: { contains: search as string, mode: 'insensitive' } },
      ];
    }
    
    const produtos = await prisma.produto.findMany({
      where,
      orderBy: {
        createdAt: 'desc',
      },
    });
    
    res.json(produtos);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const getProdutoById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const produto = await prisma.produto.findUnique({
      where: { id: parseInt(id) },
    });
    
    if (!produto) {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    res.json(produto);
  } catch (error: any) {
    res.status(500).json({ error: error.message });
  }
};

export const createProduto = async (req: Request, res: Response) => {
  try {
    const produto = await prisma.produto.create({
      data: req.body,
    });
    
    res.status(201).json(produto);
  } catch (error: any) {
    if (error.code === 'P2002') {
      return res.status(400).json({ error: 'Produto já existe' });
    }
    res.status(500).json({ error: error.message });
  }
};

export const updateProduto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const produto = await prisma.produto.update({
      where: { id: parseInt(id) },
      data: req.body,
    });
    
    res.json(produto);
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(500).json({ error: error.message });
  }
};

export const deleteProduto = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    await prisma.produto.delete({
      where: { id: parseInt(id) },
    });
    
    res.json({ message: 'Produto deletado com sucesso' });
  } catch (error: any) {
    if (error.code === 'P2025') {
      return res.status(404).json({ error: 'Produto não encontrado' });
    }
    res.status(500).json({ error: error.message });
  }
};
