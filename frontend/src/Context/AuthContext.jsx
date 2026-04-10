
import { createContext, useEffect, useState } from "react";
import api from "../api/api";

export const AuthContext = createContext();

export const  AuthProvider=({ children })=> {
  const [user, setUser] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      api.get("/auth/me")
        .then(res => setUser(res.data))
        .catch(() => setUser(null));
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
}
