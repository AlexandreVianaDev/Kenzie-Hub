import React, { useContext } from "react";
import { TechContext } from "../../Providers/TechContext";
import { useForm } from "react-hook-form";
import Modal from "../Modal";
import formSchema from "./validations";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../Input";
import Button from "../Button";

function ModalCreateTech() {
  const {
    createTech,
    techs,
    setTechs,
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

  const handleCreateTech = (data) => {
    console.log("a");
    createTech(data);
    handleCloseModal()
  };

  return (
    <>
      <Modal modal={modal}>
          <div>
            <h3 className="title-3">Cadastrar Tecnologia</h3>
            <span className="modal__closeBtn" onClick={handleCloseModal}>
              x
            </span>
          </div>
          <form className="form" onSubmit={handleSubmit(handleCreateTech)}>
            <Input
              label="Nome"
              type="text"
              placeholder="Digite o nome da tecnologia"
              id="title"
              {...register("title")}
              error={errors.title?.message}
            />
            <div className="select__container">
              <label htmlFor="status">Selecionar status</label>
              <select
                label="Selecionar módulo"
                type="text"
                id="status"
                {...register("status")}
              >
                <option value="Iniciante">Iniciante</option>
                <option value="Intermediário">Intermediário</option>
                <option value="Avançado">Avançado</option>
              </select>
              <p className="field__error">{errors.status?.message}</p>
            </div>
            <Button>Cadastrar Tecnologia</Button>
          </form>
        </Modal>
    </>
  );
}

export default ModalCreateTech;

