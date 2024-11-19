import { useNavigate } from 'react-router-dom';
import userStore from '../../store/UserStore'
import { useEffect } from 'react';

const LogoutForm = () => {

    const navigate = useNavigate();
    const {logout} = userStore();

    useEffect(() => {
        if(!sessionStorage.getItem("userIsLoggedIn")){
            navigate("/login")
        }
    },[])

    const handleSubmit = async() => {
        logout();
        navigate("/")
    }

  return (
    <div className="flex flex-col items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-5/6 max-w-sm p-8 rounded-md"
            >
                <h2 className="text-2xl font-bold text-center mb-4 outline-red-50">
                    Are you sure you want to log out?
                </h2>
                <button
                    type="submit"
                    className={`w-full text-white font-bold py-2 px-4 rounded cursor-pointer bg-blue-700 hover:bg-blue-900"`}
                >
                    Log out
                </button>
            </form>
        </div>
  )
}

export default LogoutForm