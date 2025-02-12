"use client";

import Dice from "./dice";
import GameController from "./game-controller";
import CurrentScore from "./current-score";
import { useSelector } from "react-redux";

export default function Board() {
  const { myDice, comDice } = useSelector((state: RootState) => state.dice);
  const score = useSelector((state: RootState) => state.score);
  return (
    <section className="container max-w-xl p-4 bg-surface rounded-lg w-full shadow-md flex flex-col items-center justify-start">
      <CurrentScore score={score} />
      <div className="flex items-center justify-center">
        <Dice dice={myDice} className="text-dice-first" />
        <Dice dice={comDice} className="text-dice-second" />
      </div>
      <GameController />
    </section>
  );
}
