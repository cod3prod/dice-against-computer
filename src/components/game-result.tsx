import useScore from "@/hooks/use-score";
import Button from "./button";
import { useEffect, useState } from "react";
import useDice from "@/hooks/use-dice";

export default function GameResult() {
  const { state: scoreState } = useScore();
  const [doIWin, setDoIWin] = useState(false);
  const { resetScore, checkReset } = useScore();
  const { resetDice, checkDice } = useDice();

  useEffect(() => {
    if (scoreState.myScore === scoreState.targetScore) {
      setDoIWin(true);
    } else if (scoreState.comScore === scoreState.targetScore) {
      setDoIWin(false);
    }
  }, []);

  const handleReset = () => {
    resetDice();
    resetScore();
    checkReset();
  };

  return (
    <div className="mt-4 flex flex-col justify-center gap-2">
      <h2 className="text-xl font-bold text-center">게임 결과</h2>
      <p className="text-center">{doIWin ? "승리" : "패배"}</p>
      <div className="flex items-center mt-6">
        <Button className="h-8 w-full py-1" onClick={handleReset}>RESTART</Button>
      </div>
    </div>
  );
}
