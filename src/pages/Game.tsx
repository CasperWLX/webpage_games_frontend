import { useEffect } from 'react';
import GameTop from '../components/game_components/GameTop'
import gameStore from '../store/GameStore'
import { useParams } from 'react-router-dom';
import gameInterface from '../interfaces/GameInterface';
import { useState } from 'react';


const Game = () => {

    const {fetchOneGame} = gameStore();
    const {id} = useParams();

    const [gameInfo, setGame] = useState<gameInterface | null>(null);

    useEffect(() => {
        const fetchGame = async() => {
            const gameId = Number(id);
            if(!isNaN(gameId)){
                const game = await fetchOneGame(gameId);
                setGame(game);
            }else{
                console.error("Not a correct id")
            }
            
        }
        fetchGame();
        
    }, [id])

  return (
    <div className='min-h-screen flex flex-col justify-center background-img'>
        {sessionStorage.getItem("userIsLoggedIn") ? (
            gameInfo ? (
                <GameTop title={gameInfo.title} thumbnail={gameInfo.thumbnail} short_description={gameInfo.short_description} />
            ) : (
                <h1>Loading game...</h1>
            )
        ) : (
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-2xl'>Please log in to see game info</h1>
                <a href="/login" className="text-blue-500 hover:underline">
                    Log in
                </a>
            </div>
        )}
    </div>
  )
}

export default Game