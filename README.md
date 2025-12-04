# 📦 Sistema de Gerenciamento de Produtos

Sistema simples de gerenciamento de produtos desenvolvido em TypeScript com React (frontend) e Express (backend), utilizando Prisma ORM e validação com Zod.

## 🚀 Tecnologias Utilizadas

### Frontend
- React 18 com TypeScript
- Vite
- React Router DOM
- Axios
- Zod (validação)
- CSS3

### Backend
- Node.js com Express e TypeScript
- Prisma ORM
- PostgreSQL
- Zod (validação)
- CORS

## 📋 Funcionalidades

### CRUD Completo de Produtos
- ✅ **Criar** produto
- ✅ **Listar** produtos
- ✅ **Editar** produto
- ✅ **Deletar** produto

### Funcionalidades Extras
1. **🔍 Busca de Produtos**: Busca por nome ou descrição
2. **📊 Dashboard com Estatísticas**:
   - Total de produtos cadastrados
   - Valor total em estoque
   - Lista de produtos com estoque baixo (menos de 10 unidades)

## 🛠️ Instalação e Configuração

### Pré-requisitos
- Node.js 18+
- PostgreSQL
- npm ou yarn

### Backend

1. Entre na pasta do backend:
```bash
cd backend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o arquivo `.env`:
```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/produtos_db?schema=public"
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

4. Execute as migrações do Prisma:
```bash
npm run prisma:generate
npm run prisma:migrate
```

5. Inicie o servidor:
```bash
# Desenvolvimento
npm run dev

# Produção
npm run build
npm start
```

### Frontend

1. Entre na pasta do frontend:
```bash
cd frontend
```

2. Instale as dependências:
```bash
npm install
```

3. Configure a variável de ambiente (opcional):
Crie um arquivo `.env`:
```env
VITE_API_URL=http://localhost:3001/api
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

5. Para build de produção:
```bash
npm run build
```

## 📁 Estrutura do Projeto

```
projeto_final/
├── backend/
│   ├── src/
│   │   ├── controllers/     # Controladores das rotas
│   │   ├── routes/          # Definição das rotas
│   │   ├── validations/     # Schemas Zod
│   │   ├── middlewares/     # Middlewares
│   │   ├── lib/             # Configurações (Prisma)
│   │   └── server.ts        # Arquivo principal
│   ├── prisma/
│   │   └── schema.prisma    # Schema do banco
│   └── package.json
├── frontend/
│   ├── src/
│   │   ├── components/      # Componentes reutilizáveis
│   │   ├── pages/           # Páginas da aplicação
│   │   ├── services/        # Serviços de API (Axios)
│   │   ├── validations/     # Schemas Zod
│   │   └── App.tsx          # Componente principal
│   └── package.json
└── README.md
```

## 🌐 Deploy

### Backend (Railway, Render, Heroku, etc.)

1. Configure as variáveis de ambiente:
   - `DATABASE_URL`: URL do banco PostgreSQL
   - `PORT`: Porta (geralmente definida automaticamente)
   - `CORS_ORIGIN`: URL do frontend deployado

2. Execute o build:
```bash
npm run build
```

3. Execute as migrações:
```bash
npm run prisma:migrate deploy
```

### Frontend (Vercel, Netlify, etc.)

1. Configure a variável de ambiente:
   - `VITE_API_URL`: URL completa da API backend

2. Execute o build:
```bash
npm run build
```

3. O diretório `dist` será gerado com os arquivos estáticos.

## 📝 API Endpoints

### Produtos
- `GET /api/produtos` - Listar todos os produtos (com busca opcional: `?search=termo`)
- `GET /api/produtos/:id` - Buscar produto por ID
- `POST /api/produtos` - Criar produto
- `PUT /api/produtos/:id` - Atualizar produto
- `DELETE /api/produtos/:id` - Deletar produto

## 🔒 Validação

Todas as rotas de criação e atualização são validadas com Zod tanto no frontend quanto no backend:

- **Produtos**: 
  - nome (obrigatório, max 100 caracteres)
  - descricao (opcional, max 500 caracteres)
  - preco (obrigatório, deve ser positivo)
  - estoque (obrigatório, inteiro, mínimo 0)

## 📄 Licença

Este projeto foi desenvolvido para fins acadêmicos.

## 👤 Autor

Desenvolvido como projeto final da faculdade.
