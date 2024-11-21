import { create } from "zustand";
import gameInterface from "../interfaces/GameInterface";
import clientUtils from "../util/ClientUtils";

interface apiInterface {

    listOfAllGames: gameInterface[];
    getAllGames: () => void;
    fetchOneGame: (id: number) => Promise<gameInterface | null>;
}

const gameStore = create<apiInterface>()((set) => ({

    listOfAllGames: [],

    getAllGames: async () => {
        try {
            const response = await clientUtils.get("/database/v1/all");
            
            if(response.status === 200){
                console.log("Fetched all games")
                set({listOfAllGames: [...response.data]})
            }
        } catch (error) {
            console.error("Error fetching all games")
        }
    },

    fetchOneGame: async(id: number) => {
        try{
            const response = await clientUtils.get(`/api/v1/game/${id}`)
            if(response.status === 200){
                return response.data;
            }
        }catch(error){
            console.error("Could not find that game")
            return null;
        } 
    }

}));

export default gameStore;
