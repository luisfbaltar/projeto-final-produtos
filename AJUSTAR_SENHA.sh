#!/bin/bash

echo "🔐 Configurando senha do PostgreSQL"
echo ""
echo "Este script vai definir a senha 'postgres' para o usuário postgres"
echo "Você precisará inserir sua senha do sistema quando solicitado"
echo ""
read -p "Pressione Enter para continuar..."

# Definir senha do postgres
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"

echo ""
echo "✅ Senha configurada!"
echo ""
echo "Agora você pode executar as migrações:"
echo "cd backend && npm run prisma:migrate"









