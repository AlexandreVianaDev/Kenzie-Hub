import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./validations";
import LinkSmall from "../../components/LinkSmall";
import StyledRegister from "./style";
import Header from "../../components/Header";

const Register = () => {
  const [disabled, setDisabled] = useState(false);

  const token = localStorage.getItem("@TOKEN") || "";
  const userID = localStorage.getItem("@USERID") || "";

  useEffect(() => {
    token.length > 0 ? navigate("/dashboard") : null;
  }, []);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    const registerUser = async () => {
      try {
        const response = await api.post("/users", data);
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      } catch (error) {
        error.response.data.message === "Email already exists"
          ? toast.error("Email já existe")
          : null;
      } finally {
      }
    };
    registerUser();
  };

  return (
    <StyledRegister className="container">
      <Header>
        <img src={logo} alt="Kenzie Hub" />
        <LinkSmall to={"/login"}>Voltar</LinkSmall>
      </Header>
      <main>
        <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
          <h2 className="title-1">Crie sua conta</h2>
          <p className="headline text-center">Rapido e grátis, vamos nessa</p>
          <Input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            id="name"
            {...register("name")}
            error={errors.name?.message}
          />
          <Input
            label="Email"
            type="text"
            placeholder="Digite aqui seu email"
            id="email"
            {...register("email")}
            error={errors.email?.message}
          />
          <Input
            label="Senha"
            type="password"
            placeholder="Digite aqui uma senha"
            id="password"
            {...register("password")}
            error={errors.password?.message}
          />
          <Input
            label="Confirmar senha"
            type="password"
            placeholder="Digite novamente a senha"
            id="confirmPassword"
            {...register("confirmPassword")}
            error={errors.confirmPassword?.message}
          />
          <Input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            id="bio"
            {...register("bio")}
            error={errors.bio?.message}
          />
          <Input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            id="contact"
            {...register("contact")}
            error={errors.contact?.message}
          />
          <div className="select__container">
            <label htmlFor="course_module">Selecionar módulo</label>
            <select
              label="Selecionar módulo"
              type="text"
              placeholder="Digite aqui seu nome"
              id="course_module"
              {...register("course_module")}
            >
              <option value="Primeiro módulo (Introdução ao Frontend)">
                Primeiro Módulo
              </option>
              <option value="Segundo módulo (Frontend Avançado)">
                Segundo Módulo
              </option>
              <option value="Terceiro módulo (Introdução ao Backend)">
                Terceiro Módulo
              </option>
              <option value="Quarto módulo (Backend Avançado)">
                Quarto Módulo
              </option>
            </select>
            <p className="field__error">{errors.course_module?.message}</p>
          </div>
          <Button disabled={disabled}>Cadastrar</Button>
        </form>
      </main>
    </StyledRegister>
  );
};

export default Register;
