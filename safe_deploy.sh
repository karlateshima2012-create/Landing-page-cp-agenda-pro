#!/bin/bash
# Script de Deploy Seguro para a VPS (Hostinger)
# Este script garante que nenhum código quebrado vá para produção.

# A flag -e faz com que o script seja abortado imediatamente se qualquer comando falhar (como um erro no npm run build).
set -e

echo "======================================================"
echo "🚀 INICIANDO DEPLOY SEGURO PARA PRODUÇÃO (CP AGENDA PRO)"
echo "======================================================"

echo "[1/3] Limpando cache e arquivos antigos..."
rm -rf dist/

echo "[2/3] Compilando e verificando o código (Vite & TypeScript)..."
# Se houver qualquer erro de sintaxe ou problema no código, o build vai falhar e o script será interrompido imediatamente graças ao 'set -e', protegendo o servidor em produção.
npm run build

echo "✅ Build verificado e gerado com sucesso! Nenhum erro crítico encontrado."

echo "[3/3] Iniciando transferência segura para a Hostinger (SCP)..."
# O BatchMode=yes previne que o scp fique travado pedindo senha caso a chave SSH falhe.
scp -P 22 -o BatchMode=yes -r dist/* root@76.13.209.192:/var/www/saibamaiscpagendapro/

echo "======================================================"
echo "🎉 DEPLOY FINALIZADO COM SUCESSO!"
echo "O código já está no ar em saibamaiscpagendapro.creativeprintjp.com"
echo "======================================================"
