import React from "react";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import api from "../services/api";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [userID, setUserID] = useState("");
  const [token, setToken] = useState("");

  // const token = localStorage.getItem("@TOKEN") || "";
  // const userID = localStorage.getItem("@USERID") || "";

  // get token?

  // AUTOLOGIN
  useEffect(() => {
    setToken(localStorage.getItem("@TOKEN") || "");
    const tokenLS = localStorage.getItem("@TOKEN")
    if (tokenLS) {
      const userAutoLogin = async () => {
        try {
          const response = await api.get(`/profile`, {
            headers: {
              Authorization: `Bearer ${tokenLS}`,
            },
          });
          setUser(await response.data);
          navigate("/dashboard");
        } catch (error) {
            toast.error(error);
            localStorage.clear();
        }
      };
      userAutoLogin();
    }
  }, []);

  const userLogin = async (data) => {
    try {
      // setLoading(true);
      const response = await api.post("/sessions", data);
      // console.log(data)
      setUser(response.data.user);
      localStorage.setItem("@TOKEN", response.data.token);
      setToken(localStorage.getItem("@TOKEN") || "");
      localStorage.setItem("@USERID", response.data.user.id);
      setUserID(localStorage.getItem("@USERID") || "");
      toast.success("Login realizado");
      navigate("/dashboard");
    } catch (error) {
      error.response.data?.message === "Incorrect email / password combination"
        ? toast.error("Email ou senha incorretos")
        : null;
    } finally {
      // setLoading(false);
    }
  };

  const userRegister = async (data) => {
    try {
      const response = await api.post("/users", data);
      navigate("/login");
      toast.success("Cadastro realizado com sucesso");
    } catch (error) {
      error.response.data.message === "Email already exists"
        ? toast.error("Email já existe")
        : null;
    } finally {
    }
  };

  const userLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  // const getProfile = async () => {
  //     try {
  //       const headers = {
  //         Authorization: `Bearer ${token}`,
  //       };
  //       const response = await api.get(`/profile`, { headers });
  //       setUser(await response.data);
  //     } catch (error) {
  //       toast.error(error);
  //     }
  //   };

  return (
    <UserContext.Provider
      value={{ userLogin, userRegister, loading, userLogout, user, token }}
    >
      {children}
    </UserContext.Provider>
  );
};
