# 🚀 CoreBlackBox

**Equipe:** Gabriel Theodoro, Marcos Tomita e Renato Silva

O **CoreBlackBox** é uma aplicação descentralizada (**dApp**) desenvolvida para garantir a **integridade, rastreabilidade e imutabilidade** de registros de manutenção utilizando tecnologia **Blockchain** com **Ethereum (Rede Sepolia)**.

Cada registro armazenado na blockchain torna-se:

- ✅ Permanente  
- ✅ Público e verificável  
- ✅ Imutável após confirmação  

O sistema foi criado com foco em segurança, transparência e confiabilidade no armazenamento de informações críticas de manutenção.

---

# 🎥 Demonstração do Projeto

Assista à apresentação do Pitch:

[![▶️ Assistir à Apresentação](https://img.shields.io/badge/▶️%20Assistir%20à%20Apresentação-4285F4?style=for-the-badge&logo=google-slides&logoColor=white)](https://docs.google.com/presentation/d/1_SL-o6BP10mv5-DzsqWWgn-6jNkZX8eP/edit?slide=id.p1#slide=id.p1)


Assista ao vídeo demonstrando o funcionamento completo da aplicação:

[![▶️ Assistir ao Vídeo](https://img.shields.io/badge/▶️%20Assistir%20ao%20Vídeo-FF0000?style=for-the-badge&logo=youtube&logoColor=white)](https://youtu.be/it-mUjesr0E)


---

# 🖥️ Apresentação do Pitch

[📊 Ver Apresentação](https://docs.google.com/presentation/d/1_SL-o6BP10mv5-DzsqWWgn-6jNkZX8eP/edit?slide=id.p1#slide=id.p1)

---

# 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|---|---|
| **React + Vite** | Interface Frontend |
| **Node.js** | Backend da aplicação |
| **Solidity** | Desenvolvimento do Smart Contract |
| **Ethereum Sepolia** | Rede Blockchain utilizada |
| **MetaMask** | Carteira para autenticação e transações |
| **Ethers.js** | Integração entre Frontend e Blockchain |

---

# 🧪 Como Executar o Projeto

## 📌 Pré-requisitos

Antes de começar, você precisará ter instalado:

- [Node.js (LTS)](https://nodejs.org/)
- [MetaMask](https://metamask.io/)
- Rede **Sepolia** configurada na MetaMask
- ETH de teste na rede Sepolia

Faucet recomendado:

- https://sepoliafaucet.com/

---

# 📥 Instalação

Clone o repositório:

```bash
git clone https://github.com/SEU_USUARIO/CoreBlackBox.git
```

Acesse a pasta do projeto:

```bash
cd CoreBlackBox
```

Instale as dependências principais:

```bash
npm install
```

Instale as dependências do backend:

```bash
cd backend
npm install
```

Instale as dependências do frontend:

```bash
cd ../frontend
npm install
```

---

# ⚙️ Configuração do Ambiente

Na pasta `backend`, crie o arquivo `.env`:

```bash
cp .env.example .env
```

Adicione sua chave privada no arquivo `.env`:

```env
PRIVATE_KEY=sua_chave_privada_aqui
```

> ⚠️ **IMPORTANTE:**  
> Nunca compartilhe sua chave privada e jamais envie o arquivo `.env` para o GitHub.

---

# 🚀 Deploy do Smart Contract

Acesse a pasta backend:

```bash
cd backend
```

Execute o script de deploy:

```bash
node scripts/deploy.js
```

Após o deploy:

1. Copie o endereço do contrato gerado
2. Abra o arquivo:

```bash
frontend/src/App.jsx
```

3. Atualize a variável:

```javascript
CONTRACT_ADDRESS = "ENDERECO_DO_CONTRATO"
```

---

# ▶️ Executando a Aplicação

Acesse a pasta frontend:

```bash
cd frontend
```

Inicie o servidor:

```bash
npm run dev
```

Abra no navegador:

```txt
http://localhost:5173
```

---

# 📋 Como Realizar um Registro

1. Preencha os campos:
   - Tipo de Manutenção
   - Nome do Responsável
   - Atividade Realizada

2. Clique em **Registrar na Blockchain**

3. Confirme a transação na MetaMask

4. Aguarde a confirmação da rede

5. Visualize o registro no Etherscan

---

# 🔒 Segurança e Integridade

O uso da tecnologia blockchain garante:

- 🔐 Imutabilidade dos registros
- 🕵️ Rastreabilidade completa
- 🌐 Transparência pública
- 📜 Histórico permanente de manutenção

---

# 📄 Licença

Projeto desenvolvido para fins acadêmicos e demonstração.

---
```
