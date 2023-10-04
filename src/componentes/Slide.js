import React from 'react'
import { Link } from 'react-router-dom';
import './css/slide.css';

export default function Slide() {
  return (
    <div className='slide'>
    
        <Link to={"/novo"}>
      <img className='imagem'
        src="/imagens/banner-catao.jpg"
        alt="Banner de livros"
      
      ></img></Link>
    </div>

  )
}

