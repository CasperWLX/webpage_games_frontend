
interface topProps{
    title: string
    thumbnail: string
    short_description: string
}

const GameTop = ({title, thumbnail, short_description} : topProps) => {
  return (
    <div className='flex flex-col lg:flex-row justify-evenly border border-white'>
        <section className="flex flex-col">
            <h1 className="text-2xl font-bold">{title}</h1>
            <div>{short_description}</div>
        </section>
        
        <img src={thumbnail} alt={title} />
    </div>
  )
}

export default GameTop