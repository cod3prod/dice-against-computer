"use client";

import Button from "./button";
import { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetScore, updateScore } from "@/store/slices/score-slice";
import { checkDice, resetDice, rollDice } from "@/store/slices/dice-slice";

export default function GameController() {
  const { myDice, comDice } = useSelector((state: RootState) => state.dice);
  const { myScore, comScore, targetScore } = useSelector(
    (state: RootState) => state.score
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (
      (myScore === targetScore || comScore === targetScore) &&
      targetScore !== 0
    ) {
      return;
    }

    if (myDice > comDice && targetScore !== 0) {
      dispatch(updateScore({ myScore: myScore + 1, comScore: comScore }));
    } else if (myDice < comDice && targetScore !== 0) {
      dispatch(updateScore({ myScore: myScore, comScore: comScore + 1 }));
    }
  }, [myDice, comDice, dispatch]);

  const handleReset = useCallback(() => {
    dispatch(resetDice());
    dispatch(resetScore());
    dispatch(checkDice());
  }, [resetDice, resetScore, checkDice, dispatch]);

  const handleDice = useCallback(() => {
    dispatch(checkDice());
    dispatch(rollDice());
  }, [checkDice, rollDice]);

  return (
    <div className="flex items-center justify-center gap-2">
      <Button onClick={handleDice} className="w-20">
        ROLL
      </Button>
      <Button onClick={handleReset} className="w-20">
        RESET
      </Button>
    </div>
  );
}
