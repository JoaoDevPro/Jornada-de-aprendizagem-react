import React, { useState, useEffect } from 'react';
import api from './axiosConfig';

const RiscoForm = ({ riscoAtual, onSave }) => {
    const [risco, setRisco] = useState({
        descricao: '',
        tipo: '',
        probabilidade: '',
        area: '',
        classificacao: '',
        projeto: '',
        data_entrada: '',
        impacto: '',
        consequencia: '',
        jalon_afetado: '',
        metier: '',
        status: '',
        id_usuario: ''
    });

    useEffect(() => {
        if (riscoAtual) {
            setRisco(riscoAtual);
        }
    }, [riscoAtual]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRisco({ ...risco, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (riscoAtual) {
            await api.put(`/risco/${riscoAtual.id}/`, risco);
        } else {
            await api.post('/risco/', risco);
        }
        onSave();
    };

    return (
        <form onSubmit={handleSubmit} className="form-container">
            <div className='form-group'>
            <label htmlFor="tipo">descricao</label>
            <input type="text" id='descricao' name="descricao" value={risco.descricao} onChange={handleChange} placeholder="Descrição" />
            </div>

            <div className='form-group'>
            <label htmlFor="tipo">Tipo</label>
            <input type="text" id='tipo' name="tipo" value={risco.tipo} onChange={handleChange} placeholder="Tipo de Risco" />
            </div>
            
            
            <input type="text" id='probabilidade' name="probabilidade" value={risco.probabilidade} onChange={handleChange} placeholder="Probabilidade" />
            <input type="text" id='area' name="area" value={risco.area} onChange={handleChange} placeholder="Área" />
            <input type="text" id='classificacao' name="classificacao" value={risco.classificacao} onChange={handleChange} placeholder="Classificação" />
            <input type="text" id='projeto' name="projeto" value={risco.projeto} onChange={handleChange} placeholder="Projeto" />
            <input type="date" id='data_entrada' name="data_entrada" value={risco.data_entrada} onChange={handleChange} placeholder="Data de Entrada" />
            <input type="text" id='impacto' name="impacto" value={risco.impacto} onChange={handleChange} placeholder="Impacto" />
            <input type="text" id='consequencia' name="consequencia" value={risco.consequencia} onChange={handleChange} placeholder="Consequência" />
            <input type="text" id='jalon_afetado' name="jalon_afetado" value={risco.jalon_afetado} onChange={handleChange} placeholder="Jalon Afetado" />
            <input type="text" id='metier' name="metier" value={risco.metier} onChange={handleChange} placeholder="Metier" />
            <input type="text" id='status' name="status" value={risco.status} onChange={handleChange} placeholder="Status" />
            <input type="text" id='id_usuario' name="id_usuario" value={risco.id_usuario} onChange={handleChange} placeholder="Usuário" />
            <button type="submit" id='descricao' className='button-salvar'>Salvar</button>
        </form>
    );
};

export default RiscoForm;
