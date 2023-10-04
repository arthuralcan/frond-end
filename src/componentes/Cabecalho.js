import React from 'react'
import { Link } from 'react-router-dom'
import './css/cabecalho.css';

export default function Cabecalho() {
  return (
<header data-bs-theme="dark">
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="/">
            <img src="/imagens/logo.png" alt="Logo da empresa" width="50" height="50" />
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav me-auto mb-2 mb-md-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/">Pagina Inicial</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/novo">Cadastrar Livro</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/login" aria-disabled="true">Login</a>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Pesquise por livros..." aria-label="Search"></input>
            <button class="btn btn-outline" type="submit">Pesquisar</button>
          </form>
        </div>
      </div>
    </nav>
  </header>

  )
}
