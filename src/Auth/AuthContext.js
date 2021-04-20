import React, { useContext } from 'react';
import { useLocalStorage } from '../shared/useLocalStorage';

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
  const [token, setToken] = useLocalStorage(null, 'authToken');
  const [user, setUser] = useLocalStorage(null, 'authUser');

  function logout() {
    setToken(null);
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ token, setToken, user, setUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
