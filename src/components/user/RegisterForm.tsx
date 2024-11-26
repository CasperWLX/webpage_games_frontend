import { useState, useEffect } from "react";
import userStore from "../../store/UserStore";
import { useNavigate } from "react-router-dom";
import xss from "xss";

const RegisterForm = () => {
    const [username, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeat] = useState<string>("");
    const [allowRegister, setAllow] = useState<boolean>(false);

    const navigate = useNavigate();
    const { register } = userStore();

    useEffect(() => {
        setAllow(
            password === repeatPassword &&
                password.length > 4 &&
                username.length > 4
        );
    }, [password, repeatPassword, username]);

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const result = await register(username, password);
        if (result) {
            alert("You've successfully registered");
            navigate("/login");
        } else {
            alert("A user with that name already exists");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-5/6 max-w-sm p-8 rounded-md"
            >
                <h2 className="text-2xl font-bold text-center mb-4">
                    Create new account
                </h2>
                <div className="mb-4">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="username"
                    >
                        Username
                    </label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(input) => setName(xss(input.target.value))}
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Password
                    </label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(password) =>
                            setPassword(xss(password.target.value))
                        }
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>
                <div className="mb-6">
                    <label
                        className="block text-white text-sm font-bold mb-2"
                        htmlFor="password"
                    >
                        Repeat Password
                    </label>
                    <input
                        type="password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(password) =>
                            setRepeat(xss(password.target.value))
                        }
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    disabled={!allowRegister}
                    className={`w-full text-white font-bold py-2 px-4 rounded ${
                        allowRegister
                            ? "cursor-pointer bg-blue-800 hover:bg-blue-900"
                            : "cursor-not-allowed bg-gray-500"
                    }`}
                >
                    Register
                </button>
            </form>
            <div className="flex flex-col">
                <h1>Already have an account?</h1>
                <a href="/login" className="text-blue-500 hover:underline">
                    Log in
                </a>
            </div>
        </div>
    );
};

export default RegisterForm;
