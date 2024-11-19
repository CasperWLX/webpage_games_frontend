
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion'

const RegisterForm = () => {

    const [username, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [repeatPassword, setRepeat] = useState<string>("");
    const [allowRegister, setAllow] = useState<boolean>(false);

    useEffect(() => {
        setAllow(password === repeatPassword && password.length > 4 && username.length > 4)
    },[password, repeatPassword, username])

    const handleSubmit = () => {

    }
    
  return (
    <div className="flex flex-col items-center justify-center">
        <form onSubmit={handleSubmit} className="w-5/6 max-w-sm p-8 rounded-md">
            <h2 className="text-2xl font-bold text-center mb-4">Create new account</h2>
            <div className="mb-4">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input type="text"
                    id="username"
                    value={username}
                    onChange={(input) => setName(input.target.value) }
                    className="w-full p-2 border rounded"
                    required />
            </div>
            <div className="mb-6">
                <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Password</label>
                <input type="password"
                    id="password"
                    value={password}
                    onChange={(password) => setPassword(password.target.value)} 
                    className="w-full p-2 border rounded" 
                    required />
            </div>
            <div className="mb-6">
                    <label className="block text-white text-sm font-bold mb-2" htmlFor="password">Repeat Password</label>
                    <input type="password"
                        id="repeatPassword"
                        value={repeatPassword}
                        onChange={(password) => setRepeat(password.target.value)}
                        className="w-full p-2 border rounded" 
                        required />
                </div>
            
            <button type="submit" disabled={!allowRegister} className={`w-full bg-gray-500 text-white font-bold py-2 px-4 rounded ${allowRegister ? "cursor-pointer bg-blue-700 hover:bg-blue-900" : "cursor-not-allowed"}`}>
                Register
            </button>
        </form>
        <div className="flex flex-col">
                <h1>Already have an account?</h1>
                <a href="/login" className="text-blue-500 hover:underline" >Log in</a>
            </div>
    </div>
)
}

export default RegisterForm