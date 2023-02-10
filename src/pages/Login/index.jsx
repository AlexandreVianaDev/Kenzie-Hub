import React, { useEffect, useState } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import api from "../../services/api";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./validations";
import LinkMedium from "../../components/LinkMedium";
import StyledLogin from "./style";
import Header from "../../components/Header";
import loadingAnim from "../../assets/images/loading.svg";

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
        setLoading(true);
        const response = await api.post("/sessions", data);
        setUser(response.data.user);
        localStorage.setItem("@TOKEN", response.data.token);
        localStorage.setItem("@USERID", response.data.user.id);
        toast.success("Login realizado");
        navigate("/dashboard");
      } catch (error) {
        error.response.data?.message ===
        "Incorrect email / password combination"
          ? toast.error("Email ou senha incorretos")
          : null;
      } finally {
        setLoading(false);
      }
    };
    login();
  };

  return (
    <>
      <StyledLogin className="container">
        <Header>
          <img src={logo} />
        </Header>
        <main>
          {loading ? <img className="loading" src={loadingAnim} /> : null}
          <form className="form" onSubmit={handleSubmit(onSubmitFunction)}>
            <h2 className="title-3">Login</h2>
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
              placeholder="Digite aqui sua senha"
              id="password"
              {...register("password")}
              error={errors.password?.message}
            />
            <Button>Entrar</Button>
            <p className="headline-bold text-center">
              Ainda não possui uma conta?
            </p>
            <LinkMedium to="/register">Cadastre-se</LinkMedium>
          </form>
        </main>
      </StyledLogin>
    </>
  );
};

export default Login;
