import  React, { createContext, useContext, useState,useCallback } from "react";



const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  const [userDetails, setUserDetails] = useState(null);


  return (
    <UserContext.Provider
      value={{
        userDetails
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
