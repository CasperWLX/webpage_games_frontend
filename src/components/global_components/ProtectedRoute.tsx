import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const ProtectedRoute = ({ isLoggedIn, children }: { isLoggedIn: boolean; children: JSX.Element }) => {
    return isLoggedIn ? children : navigate("/login");
};

export default ProtectedRoute;
