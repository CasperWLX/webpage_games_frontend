import robot from '../assets/images/robot-transformed.webp';
const NotFound = () => {
    return (
    <div className="bg-gray-700 flex-col justify-center h-dvh background-img">
        <div className=" items-center h-1/4">
        </div>
        <div className="items-center justify-center h-1/4 flex">
            <div className='items-center flex h-full outline outline-1 rounded bg-black px-4 mx-4 bg-opacity-70'>   
                <div className='p-5 font-medium'>Oops, looks like this page doesn't exist yet.</div>
                <img className='object-contain h-full' src={robot} alt="Not Found" />
            </div>
        </div>
    </div>
    )
};

export default NotFound;
