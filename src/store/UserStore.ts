import { create } from "zustand";
import clientUtils from "../util/ClientUtils";
import Login from "../pages/Login";

interface apiInterface {
    login: (username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const userStore = create<apiInterface>()((set) => ({

    login: async (username, password) => {
        try {
            console.log("inside login");
            const response = await clientUtils.post("/user/v1/login", { username, password })
            if(response.status === 200){
                sessionStorage.setItem("jwtToken", response.data);
                sessionStorage.setItem("userIsLoggedIn", "true");
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
            sessionStorage.removeItem("userIsLoggedIn");
            sessionStorage.removeItem("jwtToken")
        }catch(error){
            console.error("failed to log out")
        }
    },

}));

export default userStore;
