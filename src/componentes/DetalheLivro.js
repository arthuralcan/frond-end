import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from "axios"
import './css/DetalhesLivro.css';


const URL_BACK = "http://localhost:5000/livros";


export default function DetalheLivro({livros}) {

  let {id} = useParams();

  const [livro, setLivro] = useState({
    nome: '',
    valor: '',
    foto: ''
  });

  useEffect(() => {
    axios.get(URL_BACK + "/" + id).then(res => {
      setLivro(res.data);
    })
  }, []); 


  return (

    <>
    <br/>  <br/>

    <div class="containerDetail">
      
    <div class="imgBx">
      
        <img src={livro.foto} alt={livro.nome}></img>
    </div>
    
    <div class="details">
        <div class="content">
        
             <h2>{livro.nome}<br/>
          <span>{livro.autor ? livro.autor : 'Autor não definido'}</span>
              </h2>
          <p>
           
           {livro.descricao ? livro.descricao : 'A descrição deste livro ainda não foi definida. Se você é o autor deste livro, por favor, adicione uma descrição para que outros possam saber mais sobre ele.'}
          </p>
           
            <h3>R$ {livro.valor ? livro.valor.toFixed(2) : '-'}</h3>
            
            
            <button>Solicitar no caixa</button>
        </div>
    </div>

</div>

    </>
  )
}
