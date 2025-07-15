import React from "react";
import GameCard from "./GameCard";

const gameList = [
  {
    image: "/image/imagePuzzleIcon.jpg",
    name: "Image puzzle - Hard riddles",
    description:
      "Energetic Games is a game development company that focuses on creating games that are fun and engaging. Our team of developers are passionate about creating games that are not only entertaining but also challenging. We believe that games should be more than just a way to pass the time, they should be an experience that leaves a lasting impression. Our goal is to create games that are memorable and enjoyable for players of all ages.",
  },
  {
    image: "/image/multiMathIcon.jpg",
    name: "Multi Math - Math Game",
    description: "This is a description of game 2",
  },
  {
    image: "/image/elevenPlusIcon.jpg",
    name: "Eleven Plus - Minus Game",
    description: "This is a description of game 3",
  },
];

const GameDisplay = () => {
  return (
    <section className={`game-display`}>
      <div className={`flex flex-col items-center`}>
        <h1 className={`font-bold text-5xl m-14 uppercase`}>Our Games</h1>
        <div className={`flex flex-col justify-center`}>
          {gameList.map((game, index) => {
            return <GameCard key={index} game={game} />;
          })}
        </div>
      </div>
    </section>
  );
};
export default GameDisplay;
