import  React, { createContext, useContext, useState,useCallback } from "react";
import { connectToAstrolith } from "../lib/astrolith5/connection";
import {AstrolithProtocol} from "../lib/astrolith5/protocol";
import { AstrolithSetup } from '../lib/astrolith5/setup';
import { CONSTANTS } from "../constants";


const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [userName, setUserName] = useState('');
  const [web5, setWeb5] = useState(null);


  const protocol = new AstrolithProtocol();

  return (
    <AuthContext.Provider
      value={{
        protocol
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (context === undefined) {
    throw new Error("useAuth misused context");
  }

  return context;
};
