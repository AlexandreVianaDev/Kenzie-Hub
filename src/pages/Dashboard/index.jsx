import React, { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import logo from "../../assets/images/logo.svg";
import Header from "../../components/Header";
import Input from "../../components/Input";
import Modal from "../../components/Modal";
import NavBar from "../../components/NavBar";
import Tech from "../../components/Tech";
import { UserContext } from "../../Providers/UserContext";
import api from "../../services/api";
import StyledDashboard from "./style";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Button";
import { TechContext } from "../../Providers/TechContext";
import ModalEditTech from "../../components/ModalEditTech";
import ModalCreateTech from "../../components/ModalCreateTech";
import loadingAnim from "../../assets/images/loading.svg";

const Dashboard = () => {
  const { user, userLogout, token, loading } = useContext(UserContext);

  const {
    createTech,
    editTech,
    deleteTech,
    techs,
    setTechs,
    techEdit,
    setTechEdit,
    modal,
    setModal,
  } = useContext(TechContext);

  // useEffect(() => {
  //   setTechs(user.techs);
  // }, []);

  // useEffect(()=>{
  //   console.log(techs)
  // },[techs])

  const handleLogout = () => {
    userLogout();
  };

  const handleModalCreateTech = () => {
    setModal("createTech");
    // console.log(modal);
  };

  // const handleModalEditTech = (tech) => {
  //   setTechEdit(tech);
  //   setModal("editTech");
  // };

  return (
    <>
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
          <div>
            <h2 className="title-1">Tecnologias</h2>
            <button onClick={handleModalCreateTech}>+</button>
          </div>
          {loading ? <div className="loading__container"><img className="loading" src={loadingAnim} /></div> : null}
          <ul>
            {techs
              ? techs.map((tech) => (
                  <Tech tech={tech} key={tech?.id}>
                    <span>{tech.title}</span>
                    <span>{tech.status}</span>
                  </Tech>
                ))
              : null}
          </ul>
        </main>
      </StyledDashboard>
      {modal === "createTech" ? <ModalCreateTech /> : null}
      {modal === "editTech" ? <ModalEditTech /> : null}
    </>
  );
};

export default Dashboard;
