import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import api from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { token, user, userUpdate, loading, setLoading } = useContext(UserContext);

  const [techs, setTechs] = useState([]);
  const [techEdit, setTechEdit] = useState([]);
  const [modal, setModal] = useState("");

  useEffect(() => {
    userUpdate()
    setTechs(user?.techs);
  }, [user]);

  const createTech = async (data) => {
    try {
      setLoading(true);
      const response = await api.post(`/users/techs`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia criada");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const editTech = async (data, techID) => {
    try {
      setLoading(true)
      const response = await api.put(`/users/techs/${techID}`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia editada");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  const deleteTech = async (techID) => {
    console.log("tentando deletar");
    try {
      setLoading(true)
      const response = await api.delete(`/users/techs/${techID}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      toast.success("Tecnologia deletada");
    } catch (error) {
      toast.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <TechContext.Provider
      value={{
        createTech,
        editTech,
        deleteTech,
        techs,
        setTechs,
        techEdit,
        setTechEdit,
        modal,
        setModal,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
