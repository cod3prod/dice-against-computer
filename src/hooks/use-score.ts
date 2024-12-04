"use client";

import { useCallback, useContext } from "react";
import { ScoreContext } from "@/contexts/score-context";
import { initialState } from "@/reducers/score-reducer";

export default function useScore() {
  const context = useContext(ScoreContext);

  if (!context) {
    throw new Error("useScore must be used within a ScoreProvider");
  }

  const { state, dispatch } = context;

  const setTargetScore = useCallback(
    (targetScore: number) => {
      if (targetScore < 1 || targetScore > 10) {
        alert("1부터 10까지의 숫자만 입력할 수 있습니다.");
        return;
      }

      dispatch({ type: "SET_TARGET_SCORE", payload: targetScore });
    },
    [dispatch]
  );

  const updateScore = useCallback(
    (myScore: number, comScore: number) => {
      dispatch({
        type: "UPDATE_SCORE",
        payload: { myScore: myScore, comScore: comScore },
      });
    },
    [dispatch]
  );

  const resetScore = useCallback(() => {
    dispatch({ type: "RESET_SCORE", payload: initialState });
  }, [dispatch]);
  
  const checkReset = useCallback(() => {
    dispatch({ type: "CHECK_RESET", payload: !state.checkReset });
  }, [dispatch, state.checkReset]);

  return { state, setTargetScore, updateScore, resetScore, checkReset };
}
