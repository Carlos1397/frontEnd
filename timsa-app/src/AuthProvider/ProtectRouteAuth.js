
import { Navigate, useLocation } from 'react-router-dom'
import { useAuth } from './AuthProvider'

const ProtectRouteAuth = ({ children }) => {
    const auth = useAuth();
    const location = useLocation()
    if (!auth.auth) {
        console.log(location.pathname)
        return <Navigate to="/login" state={{ path: location.pathname }} />
    }
    return children
}

export default ProtectRouteAuth