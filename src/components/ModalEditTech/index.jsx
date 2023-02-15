import React, { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import formSchema from "./validations";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";
import { UserContext } from "../../Providers/UserContext";

function ModalEditTech() {
  const {
    editTech,
    deleteTech,
    techs,
    setTechs,
    techEdit,
    setTechEdit,
    modal,
    setModal,
  } = useContext(TechContext);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const handleCloseModal = () => {
    setModal("");
  };

  const handleEditTech = (data) => {
    console.log(data)
    editTech(data, techEdit.id);
    handleCloseModal()
  };

  const handleDeleteTech = (techID) => {
    console.log(techID);
    deleteTech(techID);
    handleCloseModal()
  };

  return (
    <>
      <Modal>
        <div>
          <h3 className="title-3">Tecnologia Detalhes</h3>
          <span className="modal__closeBtn" onClick={handleCloseModal}>
            x
          </span>
        </div>
        <form className="form" onSubmit={handleSubmit(handleEditTech)}>
          <Input
            label="Nome da tecnologia"
            type="text"
            placeholder="Digite o nome da tecnologia"
            id="title"
            value={techEdit.title}
            disabled
          />
          <div className="select__container">
            <label htmlFor="status">Status</label>
            <select
              label="Selecionar módulo"
              type="text"
              id="status"
              defaultValue={techEdit.status}
              {...register("status")}
            >
              <option value="Iniciante">Iniciante</option>
              <option value="Intermediário">Intermediário</option>
              <option value="Avançado">Avançado</option>
            </select>
            <p className="field__error">{errors.status?.message}</p>
          </div>
          <div className="tech__controls">
            <Button type="submit">Salvar alterações</Button>
            <button
              onClick={() => {
                console.log("cliquei");
                handleDeleteTech(techEdit.id);
              }}
              className="button-grey"
            >
              Excluir
            </button>
          </div>
        </form>
      </Modal>
    </>
  );
}

export default ModalEditTech;
