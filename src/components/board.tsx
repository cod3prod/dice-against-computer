"use client";

import useDice from "@/hooks/use-dice";
import Dice from "./dice";
import useScore from "@/hooks/use-score";
import GameController from "./game-controller";
import CurrentScore from "./current-score";

export default function Board() {
  const { state: diceState } = useDice();
  const { state: scoreState } = useScore();

  return (
    <section className="container max-w-xl p-4 bg-surface rounded-lg w-full shadow-md flex flex-col items-center justify-start">
      <CurrentScore score={scoreState} />
      <div className="flex items-center justify-center">
        <Dice dice={diceState.myDice} className="text-dice-first" />
        <Dice dice={diceState.comDice} className="text-dice-second" />
      </div>
      <GameController />
    </section>
  );
}
