import { React, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { json, Outlet, useNavigate } from "react-router-dom";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const localUser = JSON.parse(localStorage.getItem("user"));
  useEffect(() => {
    if (localUser) {
      setUser(localUser);
    }
  }, []);

  const login = (data) => {
    setUser(data);
    navigate("/profile", { replace: true });
  };

  const logout = () => {
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <UserContext.Provider value={{ user, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
