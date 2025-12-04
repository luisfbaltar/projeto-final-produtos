# ✅ Checklist - O que fazer para o projeto funcionar

## 📋 Passo a Passo Completo

### 🔧 Configuração Inicial

- [ ] **1. Instalar dependências do backend**
  ```bash
  cd backend
  npm install
  ```

- [ ] **2. Instalar dependências do frontend**
  ```bash
  cd frontend
  npm install
  ```

- [ ] **3. Ter PostgreSQL instalado ou configurado**
  - Opção local: PostgreSQL instalado no computador
  - Opção nuvem: Conta em Railway/Supabase/Neon

- [ ] **4. Criar arquivo `.env` no backend**
  - Localização: `backend/.env`
  - Conteúdo:
    ```env
    DATABASE_URL="postgresql://usuario:senha@localhost:5432/produtos_db?schema=public"
    PORT=3001
    CORS_ORIGIN=http://localhost:3000
    ```

- [ ] **5. Configurar Prisma**
  ```bash
  cd backend
  npm run prisma:generate
  npm run prisma:migrate
  ```
  - Quando perguntar nome da migração: digite `init`

### 🚀 Executar o Projeto

- [ ] **6. Iniciar backend**
  ```bash
  cd backend
  npm run dev
  ```
  - Deve aparecer: `🚀 Servidor rodando na porta 3001`

- [ ] **7. Iniciar frontend** (em outro terminal)
  ```bash
  cd frontend
  npm run dev
  ```
  - Deve aparecer: `Local: http://localhost:3000`

- [ ] **8. Abrir no navegador**
  - Acesse: http://localhost:3000

### ✅ Testar Funcionalidades

- [ ] **9. Testar Dashboard**
  - Ver estatísticas na página inicial

- [ ] **10. Testar CRUD**
  - [ ] Criar um produto
  - [ ] Listar produtos
  - [ ] Editar um produto
  - [ ] Deletar um produto

- [ ] **11. Testar Funcionalidades Extras**
  - [ ] Buscar produtos (campo de busca)
  - [ ] Ver produtos com estoque baixo no dashboard

### 🌐 Preparar para Deploy (Opcional)

- [ ] **12. Criar banco PostgreSQL na nuvem**
  - Railway, Supabase ou Neon

- [ ] **13. Fazer deploy do backend**
  - Configurar variáveis de ambiente
  - Executar migrações: `npm run prisma:migrate:deploy`

- [ ] **14. Fazer deploy do frontend**
  - Configurar `VITE_API_URL` com URL do backend
  - Build: `npm run build`

---

## 📝 Arquivos que você precisa criar manualmente

1. **`backend/.env`** - ⚠️ IMPORTANTE: Criar este arquivo!
   - Copie o conteúdo do exemplo acima
   - Ajuste com suas credenciais do PostgreSQL

2. **`frontend/.env`** - Opcional
   - Só necessário se quiser mudar a URL da API
   - Padrão: `http://localhost:3001/api`

---

## 🎯 Status do Projeto

✅ **Código completo** - Tudo implementado
✅ **Estrutura pronta** - Pastas e arquivos organizados
✅ **Documentação** - README, SETUP, DEPLOY criados
⏳ **Configuração** - Você precisa executar os passos acima
⏳ **Deploy** - Opcional, mas necessário para entrega

---

## 🚨 Se algo não funcionar

1. Verifique os erros no terminal
2. Consulte `SETUP.md` para soluções detalhadas
3. Verifique se o PostgreSQL está rodando
4. Verifique se as portas 3000 e 3001 estão livres
5. Confirme que o arquivo `.env` foi criado corretamente

---

## 📚 Documentação Disponível

- **INICIO_RAPIDO.md** - Guia rápido de 5 minutos
- **SETUP.md** - Guia detalhado passo a passo
- **DEPLOY.md** - Como fazer deploy na nuvem
- **README.md** - Visão geral do projeto









