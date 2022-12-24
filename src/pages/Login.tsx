import "./Login.css";
import { SignIn } from "../actions/SignIn";

export default function Login() {
  return (
    <>
      <div className="form">
        <form>
          <h1>Login</h1>
          <hr />
          <div className="baixo">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" required />
            <label htmlFor="senha">Senha</label>
            <input type="password" placeholder="Senha" required />
            <input type="button" value="Entrar" />

            <button
              onClick={SignIn}
              type="button"
              className="login-with-google-btn"
            >
              Entrar com Google
            </button>
          </div>
          <p>
            Não tem conta?
            <span>
              <a href="/signup">Cadastrar</a>
            </span>
          </p>
        </form>
      </div>
    </>
  );
}
