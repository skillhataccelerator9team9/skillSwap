import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState(null);

  const signIn = (userData) => {
    setUserData(userData);
  };

  const signOut = () => {
    setUserData(null);
  };

  return (
    <UserContext.Provider value={{ userData, signIn, signOut }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);
};