import React from 'react'
import { Link } from 'react-router-dom';
import './css/listaDeLivros.css';
import Slide from './Slide';

export default function ListaDeLivros({livros}) {


  const renderLivro = (livro) => {
    return (

    <div className='livro'>
      <Link to={"/detalhe/"+livro._id}>
      <img className='foto' src={livro.foto}/>
      </Link>
    
      <p className='nome'> {livro.nome}</p> 
      <p className='detalheEstatico'>Detalhes do livro</p>
      <p className='valor'>R$ {livro.valor}</p>
      <Link to={"/detalhe/"+livro._id}><button>Detalhes</button></Link>
  </div>

    );
  };


  return (

    <>
     <Slide/>
     <div class="linha">
          <span class="test">CONFIRA NOSSOS ULTIMOS LANÇAMENTOS</span>
        </div>
    <div className='listaDeProdutos'>
      { livros.map(renderLivro) }
    </div>
    </>
   
  )
}
