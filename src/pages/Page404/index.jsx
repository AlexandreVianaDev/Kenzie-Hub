import React from "react";
import LinkMedium from "../../components/LinkMedium";
import StyledPage404 from "./style";

const Page404 = () => {
  return (
    <StyledPage404>
      <main>
        <p className="huge-title">ERRO 404</p>
        <p>
          Desculpe, mas a página que você está tentando acessar não foi
          encontrada.
        </p>
        <LinkMedium to={"/login"}>Voltar para login</LinkMedium>
      </main>
    </StyledPage404>
  );
};

export default Page404;
