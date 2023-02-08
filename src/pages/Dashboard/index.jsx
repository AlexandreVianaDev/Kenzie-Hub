import React from "react";
import logo from "../../assets/images/logo.svg";
import Button from "../../components/Button";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";

const Dashboard = () => {
  return (
    <>
      <NavBar>
        <img src={logo} alt="Kenzie Hub" />
        <Button>Sair</Button>
      </NavBar>
      <Header>
        <h2>Olá, Samuel Leão</h2>
        <p>Primeiro Módulo</p>
      </Header>
      <main>
        <h2>Que pena! Estamos em desenvolvimento</h2>
        <p>
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </>
  );
};

export default Dashboard;
