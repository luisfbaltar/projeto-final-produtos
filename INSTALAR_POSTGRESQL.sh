#!/bin/bash

echo "🐘 Instalando PostgreSQL..."
echo ""
echo "Este script vai instalar o PostgreSQL e criar o banco de dados."
echo "Você precisará inserir sua senha do sistema quando solicitado."
echo ""
read -p "Pressione Enter para continuar..."

# Instalar PostgreSQL
echo "📦 Instalando PostgreSQL..."
sudo apt update
sudo apt install -y postgresql postgresql-contrib

# Iniciar serviço
echo "🚀 Iniciando serviço PostgreSQL..."
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Criar banco de dados
echo "🗄️ Criando banco de dados..."
sudo -u postgres psql -c "CREATE DATABASE produtos_db;"
sudo -u postgres psql -c "CREATE USER seu_usuario WITH PASSWORD 'sua_senha';"
sudo -u postgres psql -c "GRANT ALL PRIVILEGES ON DATABASE produtos_db TO seu_usuario;"
sudo -u postgres psql -c "ALTER USER seu_usuario CREATEDB;"

echo ""
echo "✅ PostgreSQL instalado e configurado!"
echo ""
echo "⚠️ IMPORTANTE: Ajuste o arquivo backend/.env com:"
echo "   - Seu usuário e senha criados acima"
echo "   - Ou use o usuário 'postgres' (padrão)"
echo ""









