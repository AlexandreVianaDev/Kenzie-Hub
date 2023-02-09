import React from "react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import StyledPage404 from "./style";

const Page404 = () => {
  const navigate = useNavigate();

  const handleReturn = () => {
    navigate("/login");
  };

  return (
    <StyledPage404>
      <main>
        <p className="huge-title">ERRO 404</p>
        <p>
          Desculpe, mas a página que você está tentando acessar não foi
          encontrada.
        </p>
        <button onClick={handleReturn}>Voltar para login</button>
      </main>
    </StyledPage404>
  );
};

export default Page404;
