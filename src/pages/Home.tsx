import gameStore from "../store/GameStore";
import GameCard from "../components/game_components/GameCard";

const Home = () => {
    const { listOfAllGames } = gameStore();

    return (
        <div className="min-h-screen flex flex-col background-img">
            <div className="flex-1 overflow-auto bg-transparent h-full pt-16">
                <div className="flex flex-row flex-wrap justify-around bg-transparent">
                    {listOfAllGames.map((game, index) => (
                        <GameCard game={game} key={index} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Home;
