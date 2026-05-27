CoreBlackBox 🚀

Equipe: Gabriel Theodoro, Marcos Tomita e Renato Silva

O CoreBlackBox é uma aplicação descentralizada (dApp) desenvolvida para garantir a integridade, rastreabilidade e imutabilidade dos registros de manutenção utilizando tecnologia Blockchain com Ethereum (Rede Sepolia).

Cada registro inserido na blockchain se torna permanente e publicamente verificável, impedindo qualquer alteração posterior.

🎥 Fluxo de Operação

Assista ao vídeo demonstrando o funcionamento completo do sistema:

(Substitua o link acima pelo vídeo real do projeto.)

🛠️ Tecnologias Utilizadas
Frontend: React + Vite
Backend: Node.js
Blockchain: Ethereum Sepolia + Solidity
Wallet: MetaMask
Integração: Ethers.js
🧪 Como Testar o Projeto
1. Pré-requisitos

Antes de iniciar, certifique-se de possuir:

Node.js (versão LTS)
MetaMask instalado no navegador
Rede Sepolia configurada na MetaMask
SepoliaETH na carteira
Faucet recomendado:
https://sepoliafaucet.com/
2. Instalação
git clone https://github.com/SEU_USUARIO/CoreBlackBox.git

cd CoreBlackBox

npm install

cd backend
npm install

cd ../frontend
npm install
3. Configuração

Na pasta backend, crie o arquivo de ambiente:

cp .env.example .env

Edite o arquivo .env e insira sua chave privada:

PRIVATE_KEY=sua_chave_privada_aqui

⚠️ Importante: Nunca compartilhe sua chave privada e não faça commit do arquivo .env.

🚀 Deploy do Smart Contract

Execute o deploy do contrato:

cd backend

node scripts/deploy.js

Após o deploy:

Copie o endereço do contrato gerado
Atualize a variável CONTRACT_ADDRESS
Edite o arquivo:
frontend/src/App.jsx
▶️ Executando o Sistema
cd frontend

npm run dev

Acesse no navegador:

http://localhost:5173
📋 Como Realizar um Registro
Preencha os campos:
Tipo de Manutenção
Nome do Responsável
Atividade Realizada
Clique em Registrar na Blockchain
Confirme a transação na MetaMask
Aguarde a confirmação da rede
Visualize o registro no Etherscan
📄 Licença

Projeto desenvolvido para fins acadêmicos e demonstração.
