import { motion } from "framer-motion";
import { useState } from "react";
import logo from "../../assets/images/game_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setOpen] = useState<boolean>(false);
    const navigate = useNavigate();

    const userIsLoggedIn = sessionStorage.getItem("userIsLoggedIn");


    const handleNavigate = (destination: string) => {
        navigate(destination);
    }
    

    const dropdownVariants = {
        hidden: {
            opacity: 0,
            height: 0,
            transition: { duration: 0.3 },
        },
        visible: {
            opacity: 1,
            height: "auto",
            transition: { duration: 0.3 },
        },
    };

    return (
        <nav className="flex flex-col fixed top-0 z-10 shadow-md bg-gray-900 w-full">
            <div className="pl-4 text-xl justify-between flex pt-4 pb-4">
                <a 
                    className="flex pl-4 cursor-pointer"
                    onClick={() => handleNavigate("/")}
                > 
                    <img src={logo} alt="Game Station logo" className="w-28" />
                </a>

                <ul className="hidden lg:flex space-x-5 pr-12 ">
                    <a
                        className="text-xl hover:text-blue-300 hover:underline cursor-pointer"
                        onClick={() => handleNavigate("/")}
                    >
                        Home
                    </a>
                    {userIsLoggedIn ? (
                        <a
                            className="text-xl hover:text-blue-300 hover:underline cursor-pointer"
                            onClick={() => handleNavigate("/user")}
                        >
                            User
                        </a>
                    ) : (
                        <a
                            className="text-xl hover:text-blue-300 hover:underline cursor-pointer"
                            onClick={() => handleNavigate("/login")}
                        >
                            Login
                        </a>
                    )}
                </ul>
                <button
                    onClick={() => setOpen(!isOpen)}
                    className="lg:hidden relative pr-4"
                >
                    {isOpen ? "✖" : "☰"}
                </button>
            </div>

            <motion.ul
                className="lg:hidden flex-col flex relative text-2xl overflow-hidden border-t-2 border-gray-800"
                initial="hidden"
                animate={isOpen ? "visible" : "hidden"}
                variants={dropdownVariants}
                exit="hidden"
            >
                <a
                    onClick={() => handleNavigate("/")}
                    className="p-5 w-full justify-end flex pr-8 hover:bg-gray-950 cursor-pointer"
                >
                    Home
                </a>
                {userIsLoggedIn ? (
                    <a
                    onClick={() => handleNavigate("/user")}
                        className="p-5 w-full justify-end flex pr-8 hover:bg-gray-950 cursor-pointer"
                    >
                        User
                    </a>
                ) : (
                    <a
                        onClick={() => handleNavigate("/login")}
                        className="p-5 w-full justify-end flex pr-8 hover:bg-gray-950 cursor-pointer"
                    >
                        Log in
                    </a>
                )}
            </motion.ul>
        </nav>
    );
};

export default Navbar;
