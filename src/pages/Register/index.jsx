import React, { useEffect } from "react";
import Button from "../../components/Button";
import Form from "../../components/Form";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import api from "../../services/api";
import { Link, useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const Register = () => {
  const token = localStorage.getItem("@TOKEN") || "";
  const userID = localStorage.getItem("@USERID") || "";

  useEffect(() => {
    token.length > 0 ? navigate("/dashboard") : null;
  }, []);

  const formSchema = yup.object().shape({
    name: yup.string().required("Digite seu nome"),
    email: yup
      .string()
      .required("Digite seu email")
      .email("Digite um email válido"),
    password: yup
      .string()
      .required("Digite uma senha")
      .min(8, "A senha deve conter pelo menos 8 dígitos")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "A senha deve conter letras e pelo menos um número e símbolo($*&@#)"
      ),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Senhas não coincidem"),
    bio: yup.string().required("Digite uma bio"),
    contact: yup.string().required("Digite um contato"),
    course_module: yup.string().required("Escolha um módulo"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const navigate = useNavigate();

  const onSubmitFunction = (data) => {
    console.log(data);
    const registerUser = async () => {
      try {
        const response = await api.post("/users", data);
        console.log(response);
        navigate("/login");
        toast.success("Cadastro realizado com sucesso");
      } catch (error) {
        toast.error(error.response.data.message);
      } finally {
      }
    };
    registerUser();
  };

  return (
    <main>
      <div className="container">
        <div>
          <img src={logo} alt="Kenzie Hub" />
          <Link to="/login">Voltar</Link>
        </div>
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Crie sua conta</h2>
          <p>Rapido e grátis, vamos nessa</p>
          <label htmlFor="name">Nome</label>
          <input
            label="Nome"
            type="text"
            placeholder="Digite aqui seu nome"
            id="name"
            {...register("name")}
          />
          {errors.name?.message}
          <label htmlFor="email">Email</label>
          <input
            label="Email"
            type="text"
            placeholder="Digite aqui seu email"
            id="email"
            {...register("email")}
          />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            id="password"
            {...register("password")}
          />
          {errors.password?.message}
          <label htmlFor="confirmPassword">Confirmar senha</label>
          <input
            label="Confirmar Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            id="confirmPassword"
          />
          {errors.confirmPassword?.message}
          <label htmlFor="bio">Bio</label>
          <input
            label="Bio"
            type="text"
            placeholder="Fale sobre você"
            id="bio"
            {...register("bio")}
          />
          {errors.bio?.message}
          <label htmlFor="contact">Contato</label>
          <input
            label="Contato"
            type="text"
            placeholder="Opção de contato"
            id="contact"
            {...register("contact")}
          />
          {errors.contact?.message}
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
          {errors.course_module && errors.course_module.message}
          <Button>Cadastrar</Button>
        </form>
      </div>
    </main>
  );
};

export default Register;
