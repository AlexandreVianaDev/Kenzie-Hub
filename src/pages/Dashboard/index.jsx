import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import { UserContext } from "../../Providers/UserContext";
import api from "../../services/api";
import StyledDashboard from "./style";

const Dashboard = () => {

  const { user, userLogout, token } = useContext(UserContext)

  // const navigate = useNavigate();

  // useEffect(() => {
  //   getProfile();
  // }, []);

  // useEffect(() => {
  //   token.length === 0 ? navigate("/login") : null;
  // }, [token]);

  const handleLogout = () => {
    userLogout()
  };

  return (
    <StyledDashboard className="container">
      <NavBar>
        <img src={logo} alt="Kenzie Hub" />
        <button onClick={handleLogout}>Sair</button>
      </NavBar>
      <Header>
        <h2 className="title-1">{`Olá, ${user?.name}`}</h2>
        <p className="headline">{user?.course_module}</p>
      </Header>
      <main>
        <h2 className="title-1">Que pena! Estamos em desenvolvimento</h2>
        <p className="headline">
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </p>
      </main>
    </StyledDashboard>
  );
};

export default Dashboard;
