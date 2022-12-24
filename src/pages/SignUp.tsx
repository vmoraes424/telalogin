import React, { useRef } from "react";

export default function SignUp() {
  const password: any = useRef();
  const email: any = useRef();
  return (
    <div className="form">
      <form>
        <h1>Cadastrar</h1>
        <hr />
        <div className="baixo">
          <label htmlFor="email">Email</label>
          <input type="email" placeholder="Email" ref={email} />
          <label htmlFor="senha">Senha</label>
          <input type="password" placeholder="Senha" ref={password} />
          <label htmlFor="senha">Confirmar senha</label>
          <input type="passwordConfirm" placeholder="Confirmar senha" />
          <input type="button" value="Entrar" />

          <button type="button" className="login-with-google-btn">
            Entrar com Google
          </button>
        </div>
        <p>
          Já tem uma conta?
          <span>
            <a href="/">Logar</a>
          </span>
        </p>
      </form>
    </div>
  );
}
