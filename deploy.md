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

## 🚑 5. Fallback: Deploy Manual (Caso de Emergência)

Se o GitHub estiver fora do ar ou o Firewall da Hostinger fechar novamente a porta para integrações externas, você pode fazer o deploy diretamente do seu terminal local (já que seu IP pessoal não sofre bloqueio do Firewall da VPS):

```bash
# 1. Gere o Build de produção localmente
npm run build

# 2. Envie a pasta dist inteira forçadamente por SSH para a VPS
scp -P 22 -r dist/* root@76.13.209.192:/var/www/saibamaiscpagendapro/
```
*(Isso atualizará o site instantaneamente, contornando o GitHub).*
