import React from 'react'
import gameInterface from '../../interfaces/GameInterface'
import {motion} from 'framer-motion'

interface gameProps{
    game: gameInterface;
}

const GameCard = ({ game } : gameProps) => {
  return (
    <motion.div whileHover={{scale:1.05}} className='bg-gray-900 flex flex-col items-center p-4 border border-white max-w-72 m-4 hover:cursor-pointer'>
      <div>
        <img src={game.thumbnail} alt={game.title} />
      </div>  
      <h1 className='text-2xl'>{game.title}</h1>
      <section className='flex-wrap'>
        {game.short_description}
      </section>
      
    </motion.div>
  )
}

export default GameCard