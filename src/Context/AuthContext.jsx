import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();




const AuthProvider = ({ children }) => {
  
  const [token, setToken] = useState(localStorage.getItem("userCred")||"");
  const navigate = useNavigate();
  const [user, setUser] = useState();
 

  const logOut = () => {
    setUser(null);
    setToken("");
    localStorage.removeItem("userCred");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ token, user,setUser,setToken, logOut }}>
      {children}
    </AuthContext.Provider>
  );

};


export const useAuth = () => {
    return useContext(AuthContext);
};


export { AuthProvider}