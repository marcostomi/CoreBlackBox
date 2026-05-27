# CoreBlackBox 🚀
Equipe: Gabriel Theodoro, Marcos Tomita e Renato Silva

O **CoreBlackBox** é uma aplicação descentralizada (dApp) desenvolvida para garantir a **integridade e a rastreabilidade** de registros de manutenção. Utilizando a tecnologia Blockchain (Rede Ethereum - Sepolia), cada registro inserido torna-se imutável e verificável, garantindo que as informações de manutenção não sejam alteradas após serem gravadas.

## 🎥 Fluxo de Operação
Veja abaixo o funcionamento do sistema na prática:

> **[CLIQUE AQUI PARA ASSISTIR AO VÍDEO DO FLUXO DE REGISTRO]** *(Substitua este link pelo link do seu vídeo)*

---

## 🧪 Como Testar o CoreBlackBox

Siga este passo a passo para configurar e testar o sistema em sua máquina local:

### 1. Pré-requisitos
Certifique-se de ter instalado em seu computador:
- **Node.js** (Versão LTS).
- **MetaMask** instalada no seu navegador.
- **Rede Sepolia** configurada na sua MetaMask.
- **SepoliaETH** (moedas de teste) na sua carteira. Você pode obtê-las em um [Faucet da Sepolia](https://sepoliafaucet.com/).

### 2. Instalação
Clone o repositório e instale as dependências necessárias:

```bash
git clone [https://github.com/SEU_USUARIO/CoreBlackBox.git](https://github.com/SEU_USUARIO/CoreBlackBox.git)
cd CoreBlackBox

# Instalar dependências
npm install
cd backend && npm install
cd ../frontend && npm install

3. Configuração de Segurança
Para que o sistema se conecte à blockchain, você precisará configurar sua chave privada:

Na pasta backend, crie o arquivo de ambiente a partir do exemplo:

Bash
cp .env.example .env
Abra o arquivo .env gerado e cole sua Chave Privada (Private Key) da MetaMask em PRIVATE_KEY.

⚠️ Aviso Importante: Nunca compartilhe o arquivo .env e nunca o envie para o GitHub. Este arquivo contém acesso à sua carteira e é ignorado pelo Git automaticamente.

4. Deploy do Contrato Inteligente
No terminal, dentro da pasta backend, execute o script de deploy:

Bash
node scripts/deploy.js
O terminal exibirá o Endereço do Contrato. Copie este endereço.

Certifique-se de que este endereço esteja configurado na variável CONTRACT_ADDRESS dentro do arquivo frontend/src/App.jsx.

5. Executando o Sistema
Na pasta frontend, inicie o servidor de desenvolvimento:

Bash
cd ../frontend
npm run dev
Abra o link gerado (geralmente http://localhost:5173) no seu navegador.

6. Realizando o Teste
Com o sistema aberto, preencha os campos Tipo de Manutenção, Nome do Responsável e Atividade Realizada.

Clique no botão "Registrar na Blockchain".

A MetaMask abrirá automaticamente. Revise a transação e clique em Confirmar.

O status na tela mudará para "⏳ Enviando para a Blockchain..." e, após a confirmação, para "✅ Registro feito com sucesso!".

Clique no link que aparece na notificação da MetaMask para visualizar sua transação registrada permanentemente no Etherscan.

Projeto desenvolvido para assegurar a imutabilidade e transparência de dados de manutenção.
