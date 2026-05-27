import { useState } from 'react';
import { ethers } from 'ethers';
import './App.css'; // Importa o CSS configurado acima

const CONTRACT_ADDRESS = "0xa3D345044Af79dDe9345C04A91Aec9eE098A23d6";
const CONTRACT_ABI = [
  {
    "inputs": [{ "internalType": "string", "name": "_dataHash", "type": "string" }],
    "name": "registerData",
    "outputs": [],
    "stateMutability": "nonpayable",
    "type": "function"
  }
];

function App() {
  const [tipo, setTipo] = useState("");
  const [responsavel, setResponsavel] = useState("");
  const [atividade, setAtividade] = useState("");
  const [status, setStatus] = useState("Pronto");

  const registrar = async () => {
    try {
      if (!window.ethereum) return alert("Instale a MetaMask!");
      
      setStatus("⏳ Conectando...");
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);

      const dadosConcatenados = `Tipo: ${tipo} | Resp: ${responsavel} | Ativ: ${atividade}`;

      setStatus("⏳ Enviando para a Blockchain...");
      const tx = await contract.registerData(dadosConcatenados);
      
      setStatus("⏳ Aguardando confirmação...");
      await tx.wait();

      setStatus("✅ Registro feito com sucesso!");
    } catch (error) {
      console.error(error);
      setStatus("❌ Erro ao enviar!");
    }
  };

  return (
    <div className="App">
      <div className="login-box">
        <h1>CoreBlackBox</h1>
        
        <input 
          placeholder="Tipo de Manutenção" 
          value={tipo} 
          onChange={(e) => setTipo(e.target.value)} 
        />
        <input 
          placeholder="Nome do Responsável" 
          value={responsavel} 
          onChange={(e) => setResponsavel(e.target.value)} 
        />
        <input 
          placeholder="Atividade Realizada" 
          value={atividade} 
          onChange={(e) => setAtividade(e.target.value)} 
        />
        
        <button onClick={registrar}>
          Registrar na Blockchain
        </button>
        
        <p style={{ marginTop: "15px", fontSize: "14px" }}>Status: {status}</p>
      </div>
    </div>
  );
}

export default App;