"use client";

import { useDispatch, useSelector } from "react-redux";
import Button from "./button";
import { useEffect, useState } from "react";
import { resetDice } from "@/store/slices/dice-slice";
import { checkReset, resetScore } from "@/store/slices/score-slice";

export default function GameResult() {
  const [doIWin, setDoIWin] = useState(false);
  const { myScore, comScore, targetScore } = useSelector(
    (state: RootState) => state.score
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (myScore === targetScore) {
      setDoIWin(true);
    } else if (comScore === targetScore) {
      setDoIWin(false);
    }
  }, []);

  const handleReset = () => {
    dispatch(resetDice());
    dispatch(resetScore());
    dispatch(checkReset());
  };

  return (
    <div className="mt-4 flex flex-col justify-center gap-2">
      <h2 className="text-xl font-bold text-center">게임 결과</h2>
      <p className="text-center">{doIWin ? "승리" : "패배"}</p>
      <div className="flex items-center mt-6">
        <Button className="h-8 w-full py-1" onClick={handleReset}>
          RESTART
        </Button>
      </div>
    </div>
  );
}
