import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const RequiredAuth = ({ children }) => {
  const {isAuthenticated}=useSelector((store)=>store.authManager.data)
 
  if(isAuthenticated)
  {
    return children
  }
else{
  return (
    <Navigate to="/login" />
  )
}
};

export default RequiredAuth;








