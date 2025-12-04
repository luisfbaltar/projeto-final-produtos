# 🚀 Passo a Passo - Configurar Banco de Dados

## Você precisa fazer 2 coisas:

### 1️⃣ Instalar PostgreSQL

**Opção A: Usar o script automático**
```bash
./INSTALAR_POSTGRESQL.sh
```
(Você precisará inserir sua senha do sistema quando solicitado)

**Opção B: Instalar manualmente**
```bash
sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### 2️⃣ Criar Banco e Configurar

**Criar banco de dados:**
```bash
sudo -u postgres psql
```

Dentro do psql, execute:
```sql
CREATE DATABASE produtos_db;
\q
```

**Definir senha do postgres (se necessário):**
```bash
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'sua_senha_aqui';"
```

**Ajustar arquivo .env:**
O arquivo `backend/.env` já foi criado com valores padrão. Você precisa ajustar a senha:

```bash
nano backend/.env
```

Altere a linha:
```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/produtos_db?schema=public"
```

Para (substitua `sua_senha` pela senha que você definiu):
```
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/produtos_db?schema=public"
```

**Executar migrações:**
```bash
cd backend
npm run prisma:migrate
```
Quando perguntar o nome da migração, digite: `init`

---

## ✅ Depois disso, você pode iniciar o projeto:

```bash
# Terminal 1 - Backend
cd backend
npm run dev

# Terminal 2 - Frontend
cd frontend
npm run dev
```

---

## 🆘 Se preferir usar banco na nuvem:

Veja o arquivo `CONFIGURAR_BANCO.md` para instruções detalhadas sobre Railway, Supabase ou Neon.









