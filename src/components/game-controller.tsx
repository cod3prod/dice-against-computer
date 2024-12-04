import useScore from "@/hooks/use-score";
import Button from "./button";
import useDice from "@/hooks/use-dice";
import { useCallback, useEffect } from "react";

export default function GameController() {
  const { state: diceState, rollDice, resetDice, checkDice } = useDice();
  const { state: scoreState, updateScore, resetScore, checkReset } = useScore();

  useEffect(() => {
    if (
      (scoreState.myScore === scoreState.targetScore ||
        scoreState.comScore === scoreState.targetScore) &&
      scoreState.targetScore !== 0
    ) {
      return;
    }

    if (diceState.myDice > diceState.comDice && scoreState.targetScore !== 0) {
      updateScore(scoreState.myScore + 1, scoreState.comScore);
    } else if (
      diceState.myDice < diceState.comDice &&
      scoreState.targetScore !== 0
    ) {
      updateScore(scoreState.myScore, scoreState.comScore + 1);
    }
  }, [diceState]);

  const handleReset = useCallback(() => {
    resetDice();
    resetScore();
    checkReset();
    checkDice();
  }, [resetDice, resetScore, checkReset, checkDice]);

  const handleDice = useCallback(() => {
    checkDice();
    rollDice();
  }, [checkDice, rollDice]);

  return (
    <div className="flex items-center justify-center gap-2">
      <Button onClick={handleDice} className="w-20">ROLL</Button>
      <Button onClick={handleReset} className="w-20">RESET</Button>
    </div>
  );
}
