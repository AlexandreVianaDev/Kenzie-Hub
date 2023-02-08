import React from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";

const Register = () => {
  return (
    <main>
      <div className="container">
        <div>
          <img src={logo} alt="Kenzie Hub" />
          <Button>Voltar</Button>
        </div>
        <Form>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            htmlFor="name"
          />
          <Input
            label="Email"
            type="text"
            placeholder="Digite aqui seu nome"
            htmlFor="email"
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            htmlFor="password"
          />
          <Input
            label="Confirmar Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            htmlFor="confirmPassword"
          />
          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            htmlFor="bio"
          />
          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            htmlFor="contact"
          />
          <select
            label="Selecionar módulo"
            type="text"
            placeholder="Digite aqui seu nome"
            htmlFor="course_module"
          >
            <option value="Primeiro Módulo">Primeiro Módulo</option>
            <option value="Segundo Módulo">Segundo Módulo</option>
            <option value="Terceiro Módulo">Terceiro Módulo</option>
            <option value="Quarto Módulo">Quarto Módulo</option>
            <option value="Quinto Módulo">Quinto Módulo</option>
            <option value="Sexto Módulo">Sexto Módulo</option>
          </select>
          <Button>Cadastrar</Button>
        </Form>
      </div>
    </main>
  );
};

export default Register;
