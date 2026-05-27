// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract CoreBlackBox {
    struct Manutencao {
        address tecnico;
        string tipoManutencao;
        string responsavel;
        string atividade;
        uint256 timestamp;
    }

    Manutencao[] public registros;

    event ManutencaoRegistrada(address indexed tecnico, string tipoManutencao, string responsavel, string atividade, uint256 timestamp);

    function registrarManutencao(
        string memory _tipoManutencao, 
        string memory _responsavel, 
        string memory _atividade
    ) public {
        registros.push(Manutencao(msg.sender, _tipoManutencao, _responsavel, _atividade, block.timestamp));
        
        emit ManutencaoRegistrada(msg.sender, _tipoManutencao, _responsavel, _atividade, block.timestamp);
    }

    function getRegistrosCount() public view returns (uint256) {
        return registros.length;
    }
}