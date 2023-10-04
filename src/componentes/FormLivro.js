import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from "axios"
import './css/FormLivro.css';

const URL_BACK = "http://localhost:5000/livros";

export default function FormLivro() {

  const formVazio = () => {
    return {
      nome: '',
      valor: 0.0,
      foto: '',
      descricao: '',
      autor: ''
    };
  };

  const navigate = useNavigate();


  const [form, setForm] = useState(formVazio());


  const cadastrarLivro = (e) => {
    e.preventDefault();
    axios.post(URL_BACK,form).then(res => {
      navigate('/');
    })
  };

  const setValor = (evento) => {
    setForm({...form, [evento.target.name]: evento.target.value});
  };

  return (
    <>
    <div>
      
      <h2 className='titulo'>CADASTRAR NOVO LIVRO</h2>
    <form onSubmit={cadastrarLivro}>
      <div className="mb-3">
        <label className="form-label">Nome do livro:</label>
        <input name="nome" type="text" value={form.nome} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Valor do livro:</label>
        <input name="valor" type="number" value={form.valor} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Autor do livro:</label>
        <input name="autor" type="text" value={form.autor} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">Descrição do livro:</label>
        <input name="descricao" type="text" value={form.descricao} onChange={setValor} className="form-control"/>
      </div>
      <div className="mb-3">
        <label className="form-label">URL da Foto:</label>
        <input name="foto" type="text" value={form.foto} onChange={setValor} className="form-control"/>
      </div>
      <button className='btn btn-primary'>Cadastrar novo Livro</button>
    </form>
    </div>
    </>
  )
}
