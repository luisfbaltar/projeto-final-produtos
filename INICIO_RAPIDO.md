# ⚡ Início Rápido

## Passos Essenciais (5 minutos)

### 1️⃣ Instalar Dependências

```bash
# Backend
cd backend
npm install

# Frontend
cd ../frontend
npm install
```

### 2️⃣ Configurar Banco de Dados

**Crie o arquivo `backend/.env`** com:

```env
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/produtos_db?schema=public"
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

**Substitua:**
- `seu_usuario` → seu usuário do PostgreSQL
- `sua_senha` → sua senha do PostgreSQL
- `localhost:5432` → se seu PostgreSQL estiver em outro lugar

### 3️⃣ Configurar Prisma

```bash
cd backend
npm run prisma:generate
npm run prisma:migrate
```

Quando perguntar o nome da migração, digite: `init`

### 4️⃣ Iniciar Aplicação

**Terminal 1 - Backend:**
```bash
cd backend
npm run dev
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm run dev
```

### 5️⃣ Acessar

Abra no navegador: **http://localhost:3000**

---

## 🎯 Pronto!

Agora você pode:
- Criar produtos
- Listar produtos
- Editar produtos
- Deletar produtos
- Buscar produtos
- Ver dashboard com estatísticas

---

## ❓ Problemas?

Consulte o arquivo **SETUP.md** para soluções detalhadas.









