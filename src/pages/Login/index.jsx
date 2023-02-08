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

const Login = ({ user, setUser }) => {
  const [loading, setLoading] = useState(false)
  
  const token = localStorage.getItem("@TOKEN") || "";
  const userID = localStorage.getItem("@USERID") || "";


  useEffect(() => {
    token.length > 0 ? navigate("/dashboard") : null;
  }, []);

  const formSchema = yup.object().shape({
    email: yup.string().required("Digite seu email"),
    password: yup.string().required("Digite sua senha"),
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
        toast.error(error.response.data.message);
        // toast.error("Email ou senha incorretos")
      } finally {
      }
    };
    login();
  };

  return (
    <main>
      <div className="container">
        <img src={logo} />
        <form onSubmit={handleSubmit(onSubmitFunction)}>
          <h2>Login</h2>
          <label htmlFor="email">Email</label>
          <input
            label="Email"
            type="text"
            placeholder="Digite aqui seu email"
            htmlFor="email"
            {...register("email")}
          />
          {errors.email?.message}
          <label htmlFor="password">Senha</label>
          <input
            label="Senha"
            type="password"
            placeholder="Digite aqui sua senha"
            htmlFor="password"
            {...register("password")}
          />
          {errors.password?.message}
          <Button>Entrar</Button>
          <p>Ainda não possui uma conta?</p>
          <Link to="/register">Cadastre-se</Link>
        </form>
      </div>
    </main>
  );
};

export default Login;
