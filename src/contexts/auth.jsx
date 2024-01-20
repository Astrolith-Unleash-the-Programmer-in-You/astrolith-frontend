import  React, { createContext, useContext, useState,useCallback } from "react";
import { connectToAstrolith } from "../lib/astrolith5/connection";
import { AstrolithDIDResolver } from "../lib/astrolith5/didResolver";
import {AstrolithProtocol} from "../lib/astrolith5/protocol";
import { CONSTANTS } from "../constants";


const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [connected, setConnected] = useState(false);
  const [userName, setUserName] = useState('');
  const [userDID, setUserDID] = useState('');
  const [protocolReady, setProtocolReady] = useState(null);
  const [web5, setWeb5] = useState(null);


  const connections = useCallback(async() =>{
    const {web5,connectedUserDID} = await connectToAstrolith();
    const protocol = new AstrolithProtocol(web5,connectedUserDID,CONSTANTS.PROTOCOLDID);

    const schema = protocol.astrolithProtocol.types.didResolver.schema;
    const resolver = new AstrolithDIDResolver(web5,protocol.astrolithProtocol.protocol,CONSTANTS.PROTOCOLDID,schema);

    const displayName = await resolver.resolve(connectedUserDID);//{@type:"",userName:"",userDID:"""}

    setWeb5(web5);
    setProtocolReady(protocol);
    setUserDID(connectedUserDID);
    setConnected(true);
    setUserDID(connectedUserDID);
    displayName?setUserName(displayName?.userName):"";
  }, []);

  return (
    <AuthContext.Provider
      value={{
        connected,
        setConnected,
        userName,
        userDID,
        setUserName,
        web5,
        setWeb5,
        connections,
        protocolReady
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
