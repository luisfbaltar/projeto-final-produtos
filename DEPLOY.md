# 🚀 Guia de Deploy

Este guia fornece instruções detalhadas para fazer deploy do projeto na nuvem.

## 📋 Pré-requisitos

- Conta no GitHub (para repositório)
- Conta em um serviço de deploy (Vercel, Netlify, Railway, Render, etc.)
- Banco de dados PostgreSQL na nuvem (Railway, Supabase, Neon, etc.)

## 🗄️ Banco de Dados (PostgreSQL)

### Opções Recomendadas:

1. **Railway** (https://railway.app)
   - Gratuito com limites
   - Fácil configuração
   - Fornece URL de conexão diretamente

2. **Supabase** (https://supabase.com)
   - Gratuito até 500MB
   - Interface web para gerenciar dados

3. **Neon** (https://neon.tech)
   - PostgreSQL serverless
   - Plano gratuito disponível

### Configuração do Banco:

1. Crie um novo projeto PostgreSQL
2. Copie a URL de conexão (DATABASE_URL)
3. Use esta URL no arquivo `.env` do backend

## 🔧 Backend - Deploy (Railway/Render/Heroku)

### Railway

1. Conecte seu repositório GitHub ao Railway
2. Adicione as variáveis de ambiente:
   - `DATABASE_URL`: URL do seu banco PostgreSQL
   - `PORT`: Deixe vazio (Railway define automaticamente)
   - `CORS_ORIGIN`: URL do seu frontend (ex: https://seu-app.vercel.app)
3. Configure o build command: `npm install && npm run build`
4. Configure o start command: `npm start`
5. Adicione um script de post-deploy para migrações:
   - No `package.json`, adicione: `"postinstall": "prisma generate && prisma migrate deploy"`

### Render

1. Crie um novo "Web Service"
2. Conecte seu repositório GitHub
3. Configure:
   - Build Command: `cd backend && npm install && npm run build`
   - Start Command: `cd backend && npm start`
4. Adicione variáveis de ambiente (mesmas do Railway)
5. Após o primeiro deploy, execute manualmente:
   ```bash
   cd backend
   npx prisma migrate deploy
   ```

## 🎨 Frontend - Deploy (Vercel/Netlify)

### Vercel (Recomendado)

1. Conecte seu repositório GitHub ao Vercel
2. Configure o projeto:
   - Framework Preset: Vite
   - Root Directory: `frontend`
   - Build Command: `npm run build`
   - Output Directory: `dist`
3. Adicione variável de ambiente:
   - `VITE_API_URL`: URL completa do seu backend (ex: https://seu-backend.railway.app/api)
4. Faça o deploy

### Netlify

1. Conecte seu repositório GitHub ao Netlify
2. Configure:
   - Base directory: `frontend`
   - Build command: `npm run build`
   - Publish directory: `frontend/dist`
3. Adicione variável de ambiente:
   - `VITE_API_URL`: URL do seu backend
4. Faça o deploy

## 📝 Checklist de Deploy

- [ ] Banco de dados PostgreSQL criado e acessível
- [ ] Backend deployado e funcionando
- [ ] Migrações do Prisma executadas no banco
- [ ] Frontend deployado e funcionando
- [ ] Variável `VITE_API_URL` configurada no frontend
- [ ] Variável `CORS_ORIGIN` configurada no backend
- [ ] Teste de conexão entre frontend e backend
- [ ] Teste de CRUD completo

## 🔍 Testando o Deploy

1. Acesse o frontend deployado
2. Verifique se consegue ver a página inicial
3. Tente criar uma categoria
4. Tente criar um produto
5. Verifique se os dados persistem após refresh

## 🐛 Troubleshooting

### Erro de CORS
- Verifique se `CORS_ORIGIN` no backend está com a URL correta do frontend
- Certifique-se de não ter barra (/) no final da URL

### Erro de conexão com banco
- Verifique se a `DATABASE_URL` está correta
- Certifique-se de que o banco aceita conexões externas
- Verifique se as migrações foram executadas

### Frontend não conecta ao backend
- Verifique se `VITE_API_URL` está configurada corretamente
- Certifique-se de que a URL termina com `/api`
- Verifique se o backend está online

## 📚 Links Úteis

- [Vercel Docs](https://vercel.com/docs)
- [Railway Docs](https://docs.railway.app)
- [Prisma Deploy Guide](https://www.prisma.io/docs/guides/deployment)









