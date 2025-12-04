# 🗄️ Configuração do Banco de Dados PostgreSQL

## Opção 1: Instalação Local (Recomendado para desenvolvimento)

### Passo 1: Instalar PostgreSQL

Execute o script de instalação:
```bash
chmod +x INSTALAR_POSTGRESQL.sh
./INSTALAR_POSTGRESQL.sh
```

**OU instale manualmente:**

```bash
sudo apt update
sudo apt install -y postgresql postgresql-contrib
sudo systemctl start postgresql
sudo systemctl enable postgresql
```

### Passo 2: Criar Banco de Dados

```bash
# Acessar PostgreSQL como usuário postgres
sudo -u postgres psql

# Dentro do psql, execute:
CREATE DATABASE produtos_db;
CREATE USER seu_usuario WITH PASSWORD 'sua_senha_segura';
GRANT ALL PRIVILEGES ON DATABASE produtos_db TO seu_usuario;
ALTER USER seu_usuario CREATEDB;
\q
```

### Passo 3: Configurar .env

Edite o arquivo `backend/.env` com suas credenciais:

```env
DATABASE_URL="postgresql://seu_usuario:sua_senha@localhost:5432/produtos_db?schema=public"
PORT=3001
CORS_ORIGIN=http://localhost:3000
```

**OU use o usuário padrão postgres:**

```env
DATABASE_URL="postgresql://postgres:sua_senha_postgres@localhost:5432/produtos_db?schema=public"
```

### Passo 4: Executar Migrações

```bash
cd backend
npm run prisma:migrate
```

Quando perguntar o nome da migração, digite: `init`

---

## Opção 2: Banco na Nuvem (Recomendado para deploy)

### Railway (https://railway.app)
1. Crie uma conta gratuita
2. Crie um novo projeto PostgreSQL
3. Copie a URL de conexão
4. Cole no `backend/.env` como `DATABASE_URL`

### Supabase (https://supabase.com)
1. Crie uma conta gratuita
2. Crie um novo projeto
3. Vá em Settings > Database
4. Copie a Connection String
5. Cole no `backend/.env`

### Neon (https://neon.tech)
1. Crie uma conta gratuita
2. Crie um novo projeto
3. Copie a Connection String
4. Cole no `backend/.env`

---

## ⚡ Configuração Rápida (Usuário padrão)

Se você instalou o PostgreSQL mas não criou usuário específico:

```bash
# Definir senha do usuário postgres
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'sua_senha';"

# Criar banco
sudo -u postgres psql -c "CREATE DATABASE produtos_db;"
```

Depois ajuste o `backend/.env`:
```env
DATABASE_URL="postgresql://postgres:sua_senha@localhost:5432/produtos_db?schema=public"
```

---

## ✅ Verificar se está funcionando

```bash
# Testar conexão
psql -U postgres -d produtos_db -h localhost

# Ou testar via Prisma
cd backend
npx prisma db pull
```

---

## 🐛 Problemas Comuns

### Erro: "password authentication failed"
- Verifique se a senha no `.env` está correta
- Tente redefinir a senha: `sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'nova_senha';"`

### Erro: "database does not exist"
- Crie o banco: `sudo -u postgres psql -c "CREATE DATABASE produtos_db;"`

### Erro: "connection refused"
- Verifique se PostgreSQL está rodando: `sudo systemctl status postgresql`
- Inicie se necessário: `sudo systemctl start postgresql`









