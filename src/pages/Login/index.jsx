import React from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div className="container">
        <img src={logo} />
        <Form>
          <h2>Login</h2>
          <Input
            label="Email"
            type="text"
            placeholder="Digite aqui seu email"
            htmlFor="email"
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            htmlFor="password"
          />
          <Button>Entrar</Button>
          <p>Ainda não possui uma conta?</p>
          <Button to="/register">Cadastre-se</Button>
        </Form>
      </div>
    </main>
  );
};

export default Login;
