# Guia Definitivo de Deploy - CP Agenda Pro (Landing Page)

Este documento documenta toda a infraestrutura e o processo de Deploy da Landing Page, garantindo que qualquer desenvolvedor no futuro saiba exatamente como o sistema funciona e como corrigir eventuais falhas.

## 🏗️ 1. Arquitetura do Projeto
- **Framework:** React + Vite (Single Page Application).
- **Hospedagem:** Servidor VPS Ubuntu (Hostinger).
- **Servidor Web:** Nginx (encarregado de servir a pasta `dist/` gerada pelo build).
- **CI/CD:** GitHub Actions (Deploy 100% automatizado no push para a branch `main`).

---

## ⚙️ 2. Configuração do Servidor VPS (Nginx)

Como o projeto é construído em Vite/React, a VPS apenas serve os arquivos estáticos compilados. 

**Localização dos Arquivos:** 
Todos os arquivos da Landing Page ficam hospedados no caminho: 
`/var/www/saibamaiscpagendapro`

**Configuração do Bloco Nginx (`/etc/nginx/sites-available/saibamaiscpagendapro.conf`):**
O Nginx possui uma regra crucial (`try_files`) para garantir que o roteamento do React funcione se a página for recarregada:

```nginx
server {
    listen 80;
    server_name saibamaiscpagendapro.creativeprintjp.com;

    root /var/www/saibamaiscpagendapro;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache de arquivos estáticos (Performance)
    location ~* \.(?:ico|css|js|gif|jpe?g|png|woff2?|eot|ttf|svg)$ {
        expires 6M;
        access_log off;
        add_header Cache-Control "public";
    }
}
```
*(O Certificado SSL/HTTPS é gerido de forma automatizada via `certbot --nginx`).*

---

## 🤖 3. Deploy Automático (GitHub Actions)

A automação acontece via GitHub Actions (`.github/workflows/deploy.yml`). O robô do GitHub constrói a aplicação (`npm run build`) e faz a transferência segura dos arquivos para a VPS usando o componente `appleboy/scp-action`.

### 🔑 Segredos do GitHub (Secrets)
Para que o Actions consiga conectar no servidor, o repositório no GitHub deve conter a chave privada SSH configurada em:
`Settings > Secrets and variables > Actions > Repository secrets`

* **`VPS_SSH_KEY`**: Chave privada (O conteúdo gerado via `ssh-keygen`, incluindo o `-----BEGIN OPENSSH PRIVATE KEY-----`).

### 🛡️ Firewall da Hostinger (CRÍTICO)
Se o GitHub Actions falhar apontando erro de **"dial tcp IP:22 i/o timeout"**, o problema é o Firewall!
Como os IPs do GitHub Actions mudam frequentemente e vêm de Data Centers da Azure, a Hostinger bloqueia a conexão por padrão.

**Para resolver bloqueios:**
1. Acesse o hPanel da Hostinger.
2. Vá na sua **VPS > Segurança > Firewall**.
3. Crie (ou mantenha) uma regra de Inbound (Entrada) liberando a Porta TCP **22** para a origem **Anywhere (Qualquer um)**.

---

## 🛠️ 4. Fluxo de Publicação

Se você quiser subir uma alteração no site, tudo que você precisa fazer é:

1. Fazer suas edições no código.
2. Rodar no terminal:
   ```bash
   git add .
   git commit -m "Sua descrição do que foi feito"
   git push origin main
   ```
3. O GitHub automaticamente roda o Build e joga a pasta `dist` atualizada para a VPS. Em 30 segundos o site estará atualizado no ar!

---

## 🚑 5. Fallback: Deploy Manual (Caso de Emergência ou GitHub Bloqueado)

Se o GitHub Actions estiver fora do ar (com a bolinha vermelha) devido ao Firewall da Hostinger, você ou **qualquer Agente de IA** poderá usar a solução de entrega expressa ("motoboy particular") direto pelo terminal local.

**ATENÇÃO AGENTES DE IA:** Sempre utilizem o script de segurança `safe_deploy.sh` em vez de comandos soltos. Nossos servidores estão em Produção e precisamos garantir que nenhum erro quebre a Landing Page.

### 🛡️ O Script de Segurança (`safe_deploy.sh`)
Criamos um script que automatiza o envio, mas com uma forte camada de segurança:
1. Ele utiliza a regra bash `set -e`, que obriga o processo a parar imediatamente caso algum passo dê errado.
2. Ele executa o `npm run build`. O compilador do Vite atua como nosso porteiro de segurança: se houver qualquer erro de sintaxe ou tag não fechada no código, o build falha, o script é interrompido e **nada quebrado é enviado para a VPS**.
3. Se aprovado no build, ele faz o envio forçado via `scp` direto da sua máquina para a VPS.

**Para novos projetos ou Agentes de IA:**
Se este arquivo for copiado para um novo projeto, basta criar um arquivo chamado `safe_deploy.sh` na raiz, colar o código abaixo (alterando o IP e o caminho de destino) e rodar `chmod +x safe_deploy.sh`.

```bash
#!/bin/bash
# Script de Deploy Seguro para a VPS (Hostinger)

# A flag -e faz com que o script seja abortado imediatamente se qualquer erro ocorrer
set -e

echo "🚀 INICIANDO DEPLOY SEGURO PARA PRODUÇÃO..."

echo "[1/3] Limpando cache e arquivos antigos..."
rm -rf dist/

echo "[2/3] Compilando e verificando o código (Vite & TypeScript)..."
npm run build
echo "✅ Build verificado e gerado com sucesso! Nenhum erro crítico encontrado."

echo "[3/3] Iniciando transferência segura para a VPS via SSH (SCP)..."
# Substitua root@SEU_IP e o caminho /var/www/suapasta pelo diretório correto do seu projeto
scp -P 22 -o BatchMode=yes -r dist/* root@76.13.209.192:/var/www/saibamaiscpagendapro/

echo "🎉 DEPLOY FINALIZADO COM SUCESSO!"
```

### Como Executar:
No terminal da sua máquina, basta rodar:
```bash
./safe_deploy.sh
```
*(Isso fará todo o processo de checagem, build e upload instantaneamente, contornando o GitHub com total segurança).*
