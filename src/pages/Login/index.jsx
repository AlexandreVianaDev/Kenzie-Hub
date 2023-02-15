import React, { useContext } from "react";
import Button from "../../components/Button";
import Input from "../../components/Input";
import logo from "../../assets/images/logo.svg";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import formSchema from "./validations";
import LinkMedium from "../../components/LinkMedium";
import StyledLogin from "./style";
import Header from "../../components/Header";
import loadingAnim from "../../assets/images/loading.svg";
import { UserContext } from "../../Providers/UserContext";

const Login = () => {
  const { userLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitFunction = (data) => {
    userLogin(data);
  };

  return (
    <>
      <StyledLogin className="container">
        <Header>
          <img src={logo} />
        </Header>
        <main>
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
      {loading ? (
        <div className="loading__container">
          <img className="loading" src={loadingAnim} />
        </div>
      ) : null}
    </>
  );
};

export default Login;
