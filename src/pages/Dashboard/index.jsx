import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.svg";
import Button from "../../components/Button";
import Header from "../../components/Header";
import LinkSmall from "../../components/LinkSmall";
import NavBar from "../../components/NavBar";
import api from "../../services/api";
import StyledDashboard from "./style";

const Dashboard = ({ user, setUser }) => {
  const token = localStorage.getItem("@TOKEN") || "";
  const userID = localStorage.getItem("@USERID") || "";

  const navigate = useNavigate();

  console.log(user);

  useEffect(() => {
    const getUser = async () => {
      try {
        const headers = {
          "Authorization" : `Bearer ${token}`
        }
        const response = await api.get(`/profile`, { headers });
        setUser(await response.data);
      } catch (error) {
        toast.error(error);
      }
    };
    getUser();
  }, []);

  // useEffect(() => {
  //   const getUser = async () => {
  //     try {
  //       const response = await api.get(`/users/${userID}`);
  //       setUser(await response.data);
  //     } catch (error) {
  //       toast.error(error);
  //     }
  //   };
  //   getUser();
  // }, []);

  useEffect(() => {
    token.length === 0 ? navigate("/login") : null;
  }, [token]);

  const handleLogout = () => {
    console.log("cliquei");
    localStorage.clear();
    navigate("/");
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
