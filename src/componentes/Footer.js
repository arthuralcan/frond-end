import React from 'react'
import './css/Footer.css';

export default function Footer() {
  return (
    <>
   <div class="container">
  <footer class="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
    <p class="col-md-4 mb-0 text-body-secondary">© 2023 Looking For - Devs Arthur - Yago - Yuri</p>

    <a href="/" class="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
      <svg class="bi me-2" width="40" height="32"><use href="#bootstrap"></use></svg>
    </a>

    <ul class="nav col-md-4 justify-content-end">
      <li class="nav-item"><a href="/" class="nav-link px-2 text-body-secondary">Pagina Inicial</a></li>
      <li class="nav-item"><a href="/novo" class="nav-link px-2 text-body-secondary">Cadastrar Produtos</a></li>
      <li class="nav-item"><a href="/login" class="nav-link px-2 text-body-secondary">Login</a></li>

    </ul>
  </footer>
</div>
   
    
    
    </>
  )
}
