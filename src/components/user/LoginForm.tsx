import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import userStore from "../../store/UserStore";

const LoginForm = () => {
    const [username, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    const navigate = useNavigate();

    const [allowLogin, setAllow] = useState<boolean>(false);

    useEffect(() => {
        setAllow(password.length > 4 && username.length > 4)
    },[password, username])

    const { login } = userStore();

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        try {
            console.log("we try log in");
            const loginSuccesfull = await login(username, password);
            if (loginSuccesfull) {
                navigate("/user");
                alert(`Hello ${username}`);
            }
        } catch (error) {
            console.log("something went wrong when logging in");
        }
    };

    return (
        <div className="flex flex-col items-center justify-center">
            <form
                onSubmit={handleSubmit}
                className="w-5/6 max-w-sm p-8 rounded-md"
            >
                <h2 className="text-2xl font-bold text-center mb-4 outline-red-50">
                    Log in to your account
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
                        onChange={(input) => setName(input.target.value)}
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
                            setPassword(password.target.value)
                        }
                        className="w-full p-2 border rounded"
                        required
                    />
                </div>

                <button
                    type="submit"
                    className={`w-full bg-gray-500 text-white font-bold py-2 px-4 rounded ${allowLogin ? "cursor-pointer bg-blue-700 hover:bg-blue-900" : "cursor-not-allowed"}`}
                >
                    Login
                </button>
            </form>
            <div className="flex flex-col">
                <h1>Don't have an account yet?</h1>
                <a
                    href="/register"
                    className="text-blue-500 hover:underline"
                >
                    Register now
                </a>
            </div>
        </div>
    );
};

export default LoginForm;
