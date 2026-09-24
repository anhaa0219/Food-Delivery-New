"use client";

import { createContext, useContext, useState } from "react";

const Context = createContext(null);
export const Provider = ({ children }) => {
  const [user, setUser] = useState(null);

  return <Context.Provider value={{ user }}>{children}</Context.Provider>;
};
export const useAuth = () => {
  const context = useContext(Context);
  if (!context) {
    throw new Error("useAuth must be used within and AuthProvider");
  } else {
    return context;
  }
};
