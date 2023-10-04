import React from 'react';
import './css/LoginForm.css';

export default function LoginForm() {


  return (
   <>
   
   <body>
        <div class="main">
          <input type="checkbox" id="chk" aria-hidden="true"></input>

          <div class="signup">
            <form>
              <label className='ihu' for="chk" aria-hidden="true">Cadastrar</label>
              <input className='inp' type="text" name="txt" placeholder="Nome do usuario" required=""></input>
              <input className='inp' type="email" name="email" placeholder="E-mail" required=""></input>
              <input className='inp' type="password" name="pswd" placeholder="Nova Senha" required=""></input>
              <button className='butao'>Cadastrar</button>
            </form>
          </div>

          <div class="login">
            <form>
              <label className='ihu' for="chk" aria-hidden="true">Entrar</label>
              <input className='inp' type="email" name="email" placeholder="E-mail" required=""></input>
              <input className='inp' type="password" name="pswd" placeholder="Senha" required=""></input>
              <button className='butao' >Entrar</button>
            </form>
          </div>
        </div>
      </body>
   </>
  );
}
