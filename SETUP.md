# 🚀 Guia de Configuração - Passo a Passo

Este guia mostra exatamente o que você precisa fazer para o projeto funcionar.

## ✅ Checklist de Configuração

### 1. Instalar Dependências

#### Backend
```bash
cd backend
npm install
```

#### Frontend
```bash
cd frontend
npm install
```

### 2. Configurar Banco de Dados PostgreSQL

Você precisa de um banco PostgreSQL. Opções:

**Opção A: PostgreSQL Local**
1. Instale PostgreSQL no seu computador
2. Crie um banco de dados:
```sql
CREATE DATABASE produtos_db;
```

**Opção B: PostgreSQL na Nuvem (Recomendado para deploy)**
- [Railway](https://railway.app) - Gratuito
- [Supabase](https://supabase.com) - Gratuito até 500MB
- [Neon](https://neon.tech) - PostgreSQL serverless gratuito

### 3. Configurar Variáveis de Ambiente

#### Backend - Criar arquivo `.env`

Na pasta `backend/`, crie um arquivo `.env`:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/produtos_db?schema=public"
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

**Importante:** Substitua `usuario`, `senha` e `localhost:5432` pelos seus dados reais.

**Se estiver usando banco na nuvem**, use a URL completa fornecida pelo serviço.

#### Frontend - Criar arquivo `.env` (Opcional)

Na pasta `frontend/`, crie um arquivo `.env`:

```env
VITE_API_URL=http://localhost:3001/api
```

**Nota:** Se não criar este arquivo, o frontend usará `http://localhost:3001/api` por padrão.

### 4. Configurar o Prisma

No terminal, dentro da pasta `backend/`:

```bash
# Gerar o cliente Prisma
npm run prisma:generate

# Criar e executar as migrações do banco
npm run prisma:migrate
```

Quando executar `prisma:migrate`, ele vai perguntar o nome da migração. Digite: `init` ou apenas pressione Enter.

### 5. Iniciar o Backend

Em um terminal, na pasta `backend/`:

```bash
npm run dev
```

Você deve ver: `🚀 Servidor rodando na porta 3001`

### 6. Iniciar o Frontend

Em outro terminal, na pasta `frontend/`:

```bash
npm run dev
```

Você deve ver algo como: `Local: http://localhost:3000`

### 7. Testar o Projeto

1. Abra o navegador em `http://localhost:3000`
2. Você deve ver o Dashboard
3. Clique em "Produtos" no menu
4. Clique em "Novo Produto" e crie um produto de teste
5. Teste editar e deletar

## 🐛 Problemas Comuns

### Erro: "Cannot find module '@prisma/client'"
**Solução:** Execute `npm install` novamente na pasta `backend/`

### Erro: "P1001: Can't reach database server"
**Solução:** 
- Verifique se o PostgreSQL está rodando
- Verifique se a `DATABASE_URL` no `.env` está correta
- Teste a conexão com: `psql -U usuario -d produtos_db`

### Erro: "Port 3001 already in use"
**Solução:** 
- Mude a porta no `.env` do backend: `PORT=3002`
- Ou pare o processo que está usando a porta 3001

### Erro de CORS no navegador
**Solução:** 
- Verifique se `CORS_ORIGIN` no `.env` do backend está como `http://localhost:3000`
- Certifique-se de que o frontend está rodando na porta 3000

## 📦 Preparar para Deploy

### Backend

1. Certifique-se de que o `.env` tem as variáveis corretas para produção
2. Execute o build:
```bash
npm run build
```

3. Para deploy, você precisará executar as migrações:
```bash
npm run prisma:migrate:deploy
```

### Frontend

1. Configure `VITE_API_URL` com a URL do backend em produção
2. Execute o build:
```bash
npm run build
```

3. O diretório `dist/` será gerado com os arquivos para deploy

## 📝 Resumo dos Comandos

```bash
# 1. Instalar dependências
cd backend && npm install
cd ../frontend && npm install

# 2. Configurar .env no backend (criar arquivo manualmente)

# 3. Configurar Prisma
cd backend
npm run prisma:generate
npm run prisma:migrate

# 4. Iniciar backend (terminal 1)
cd backend
npm run dev

# 5. Iniciar frontend (terminal 2)
cd frontend
npm run dev
```

## ✅ Verificação Final

Se tudo estiver funcionando, você deve conseguir:
- ✅ Ver o Dashboard com estatísticas
- ✅ Listar produtos
- ✅ Criar um novo produto
- ✅ Editar um produto existente
- ✅ Deletar um produto
- ✅ Buscar produtos por nome/descrição

Se algum passo não funcionar, verifique os erros no terminal e consulte a seção "Problemas Comuns" acima.









