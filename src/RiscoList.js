import React, { useEffect, useState } from 'react';
import api from './axiosConfig';
import "./Sidebar.css";

const RiscoList = () => {
    const [riscos, setRiscos] = useState([]);

    useEffect(() => {
        fetchRiscos();
    }, []);

    const fetchRiscos = async () => {
        try {
            const response = await api.get('/risco/');
            setRiscos(response.data);
        } catch (error) {
            console.error('Erro ao buscar riscos:', error);
        }
    };

    return (
        
        <div className='container1'>
            {/*<h1 className='titulo'>Gestão de Riscos</h1>*/}
            
            <ul>
                {riscos.map((risco) => (
                    <li key={risco.id}  className="data-item">
                        <strong>Descrição:</strong> {risco.descricao}<br />
                        <strong>Tipo de Risco:</strong> {risco.tipo}<br />
                        <strong>Probabilidade:</strong> {risco.probabilidade}<br />
                        <strong>Área:</strong> {risco.area}<br />
                        <strong>Classificação:</strong> {risco.classificacao}<br />
                        <strong>Projeto:</strong> {risco.projeto}<br />
                        <strong>Data de Entrada:</strong> {risco.data_entrada}<br />
                        <strong>Impacto:</strong> {risco.impacto}<br />
                        <strong>Consequência:</strong> {risco.consequencia}<br />
                        <strong>Jalon Afetado:</strong> {risco.jalon_afetado}<br />
                        <strong>Metier:</strong> {risco.metier}<br />
                        <strong>Status:</strong> {risco.status}<br />
                        <strong>Usuário:</strong> {risco.id_usuario}<br />
                    </li>
                ))}
            </ul>
        </div>
        
    );
};


export default RiscoList;