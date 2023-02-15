import React, { useContext } from "react";
import logo from "../../assets/images/logo.svg";
import Header from "../../components/Header";
import NavBar from "../../components/NavBar";
import Tech from "../../components/Tech";
import { UserContext } from "../../Providers/UserContext";
import StyledDashboard from "./style";
import { TechContext } from "../../Providers/TechContext";
import ModalEditTech from "../../components/ModalEditTech";
import ModalCreateTech from "../../components/ModalCreateTech";
import loadingAnim from "../../assets/images/loading.svg";

const Dashboard = () => {
  const { user, userLogout, loading } = useContext(UserContext);

  const { techs, modal, setModal } = useContext(TechContext);

  const handleLogout = () => {
    userLogout();
  };

  const handleModalCreateTech = () => {
    setModal("createTech");
  };

  return (
    <>
      <StyledDashboard>
        <NavBar>
          <img src={logo} alt="Kenzie Hub" />
          <button onClick={handleLogout}>Sair</button>
        </NavBar>
        <Header>
          <h2 className="title-1">{`Olá, ${user?.name}`}</h2>
          <p className="headline">{user?.course_module}</p>
        </Header>
        <main className="container">
          <div>
            <h2 className="title-1">Tecnologias</h2>
            <button onClick={handleModalCreateTech}>+</button>
          </div>
          <ul>
            {techs.length > 0 ? (
              techs.map((tech) => (
                <Tech tech={tech} key={tech?.id}>
                  <span>{tech.title}</span>
                  <span>{tech.status}</span>
                </Tech>
              ))
            ) : (
              <li>Ainda não há tecnologias cadastradas</li>
            )}
          </ul>
        </main>
      </StyledDashboard>
      {loading ? (
        <div className="loading__container">
          <img className="loading" src={loadingAnim} />
        </div>
      ) : null}
      {modal === "createTech" ? <ModalCreateTech /> : null}
      {modal === "editTech" ? <ModalEditTech /> : null}
    </>
  );
};

export default Dashboard;
