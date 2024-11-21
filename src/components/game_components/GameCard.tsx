import gameInterface from "../../interfaces/GameInterface";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface gameProps {
    game: gameInterface;
}

const GameCard = ({ game }: gameProps) => {
    const navigate = useNavigate();

    const handleNavigate = (id: number) => {
        navigate(`/game/${id}`);
    };

    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-gray-900 flex flex-col items-center p-4 border border-white max-w-72 m-4 hover:cursor-pointer"
            onClick={() => handleNavigate(game.id)}
        >
            <div>
                <img src={game.thumbnail} alt={game.title} />
            </div>
            <h1 className="text-2xl">{game.title}</h1>
            <section className="flex-wrap">{game.short_description}</section>
        </motion.div>
    );
};

export default GameCard;
