import { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthProvider } from '../../contexts/AuthContext';


const PrivateRouter = ({children}) => {
  
    const {user, loading} = useContext(AuthProvider);
    const location = useLocation();

    if(user) {
     return children;
    }

    if(loading){
        return <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }
    return <Navigate to="/login" state={{form: location}} replace></Navigate>
};

export default PrivateRouter;