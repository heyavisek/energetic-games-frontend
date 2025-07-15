// generate game card with image showing the game name and the game description

import Image from "next/image";

const GameCard = ({game}) => {
    return (
        <div className={`flex flex-col md:flex-row justify-between items-center rounded-3xl m-5 lg:w-[900px] w-full bg-[#00000099] border-0 p-10`}>
            <Image src={game.image} alt={`game image`} width={`200`} height={`200`} className={`rounded-3xl  w-[250px] h-[250px`}/>

            <div className={`flex flex-col align-top ml-10 mt-10`}>
                <h1 className={`flex justify-end text-white text-3xl font-bold`}>{game.name}</h1>
                <p className={`flex max-w-[500px] min-h-48 text-justify text-white text-sm p-2`}>{game.description}</p>
            </div>
        </div>
    )
}

export default GameCard