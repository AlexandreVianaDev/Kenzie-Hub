import React, { useEffect, useState } from "react";
import Form from "../../components/Form";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import formSchema from "./validations";
import LinkMedium from "../../components/LinkMedium";
import StyledLogin from "./style";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const Login = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false);

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
    const login = async () => {
      try {
        const response = await api.post("/sessions", data);
        console.log(response.data.user.id);
        setUser(response.data.user);
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        toast.success("Login realizado");
        navigate("/dashboard");
      } catch (error) {
        error.response.data?.message === "Incorrect email / password combination" ? toast.error("Email ou senha incorretos") : (null);
        // toast.error("Email ou senha incorretos")
      } finally {
      }
    };
    login();
  };

  return (
    <>
     <StyledLogin className="container">
        <Header><img src={logo} /></Header>     
        <main>
          <form onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="title-3">Login</h2>
            <label htmlFor="email">Email</label>
            <input
              label="Email"
              type="text"
              placeholder="Digite aqui seu email"
              htmlFor="email"
              {...register("email")}
            />
            <p className="field__error">{errors.email?.message}</p>
            <label htmlFor="password">Senha</label>
            <input
              label="Senha"
              type="password"
              placeholder="Digite aqui sua senha"
              htmlFor="password"
              {...register("password")}
            />
            <p className="field__error">{errors.password?.message}</p>
            <Button>Entrar</Button>
            <p className="headline-bold text-center">Ainda não possui uma conta?</p>
            <LinkMedium to="/register">Cadastre-se</LinkMedium>
          </form>
      </main>
      </StyledLogin>
    </>
  );
};

export default Login;
