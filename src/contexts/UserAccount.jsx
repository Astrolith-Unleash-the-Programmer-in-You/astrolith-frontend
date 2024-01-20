import  React, { createContext, useContext, useState,useCallback, useEffect } from "react";
import { useAuth } from "./auth";
import { AstrolithSetup } from "../lib/astrolith5/setup";
import { CONSTANTS } from "../constants";


const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const {connected,userName,userDID,web5} = useAuth();
  const [userDetails, setUserDetails] = useState(null);
  const [setup,setSetup] = useState(null);
  const [userResolved,setUserResolved] = useState(false);

  useEffect(()=>{
    ///run this effect

    //if userName is not resolved, skip setup
    if(Boolean(userName)){
      const setup = new AstrolithSetup(web5,userDID,CONSTANTS.PROTOCOLDID);
      setSetup(setup);
      setUserDetails({
        account:setup.playerAccount,
        profile:setup.playerProfile,
        achievement:setup.playerAchievement,
        collectibles:setup.playerCollectibles,
        certificate:setup.playerCertificate
      })
    }
  },[connected,userResolved]);

  return (
    <UserContext.Provider
      value={{
        userDetails,
        setup
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser misused context");
  }

  return context;
};
