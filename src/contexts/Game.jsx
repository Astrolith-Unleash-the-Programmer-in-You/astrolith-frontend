import  React, { createContext, useContext, useState,useCallback } from "react";
import { CONSTANTS } from "../constants";
import { useAuth } from "./auth";
import { useUserContext } from "./UserAccount";

const GameContext = createContext(null);

export const GameProvider = ({ children }) => {
  const [startGame,setStartGame] = useState(false);
  const [showLevels,setShowLevels] = useState(true);
  const [currentLevel,setCurrentLevel] = useState("");
  const [userName, setUserName] = useState('');
  const [web5, setWeb5] = useState(null);


  return (
    <GameContext.Provider
      value={{
        startGame,
        showLevels,
        setShowLevels,
        currentLevel,
        setCurrentLevel
      }}
    >
      {children}
    </GameContext.Provider>
  );
};

export const useGame = () => {
  const context = useContext(GameContext);

  if (context === undefined) {
    throw new Error("useGame misused context");
  }

  return context;
};
