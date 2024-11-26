import { create } from "zustand";
import clientUtils from "../util/ClientUtils";
import Cookies from "js-cookie";

interface apiInterface {
    register: (username: string, password: string) => Promise<boolean>;
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const userStore = create<apiInterface>()(() => ({

    register: async (username, password) => {
        try{
            const response = await clientUtils.post("/user/v1/register", {username, password})
            if(response.status === 201){
                return true;
            }
        }catch(error){
            console.error("Failed to register")
        }
        return false;
    },

    login: async (username, password) => {
        try {
            console.log("inside login");
            const response = await clientUtils.post("/user/v1/login", { username, password })
            if(response.status === 200){
                Cookies.set("jwtToken", response.data, {secure: true, sameSite: "Strict", expires: 1})
                Cookies.set("userIsLoggedIn", "true", {secure: true, sameSite: "Strict", expires: 1})
                console.log("log in successfull");
                return true;
            }
        } catch (error) {
            console.error("failed to log in");
        }
        return false;
    },

    logout: () => {
        try{
            Cookies.remove("jwtToken");
            Cookies.remove("userIsLoggedIn");
        }catch(error){
            console.error("failed to log out")
        }
    },

}));

export default userStore;
